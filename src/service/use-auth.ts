import { computed, ref } from 'vue'
import axios from 'axios'
import qs from 'qs'
import { useLocalStorage } from '@vueuse/core'

interface TokenResponse {
  access_token: string;
  refresh_token: string;
}

const token = useLocalStorage('token', null as string | null)
const refreshToken = useLocalStorage('refreshToken', null as string | null)

const tokenExpiration = useLocalStorage('tokenExpiration', null as string | null)
const tokenExpirationDate = computed(() => new Date(tokenExpiration.value ?? 0))
const tokenDefaultExpiration = 30 * 60 * 1000 // 30 minutes

const loading = ref(false)

function isLoggedIn(): boolean {
  if (token.value === null) {
    return false
  }
  if (tokenExpirationDate.value === null) {
    return false
  }
  return tokenExpirationDate.value >= new Date();

}

function canRefresh() {
  return refreshToken.value !== null
}

const loginUrl = 'http://localhost:3000/authenticate/oauth/139a95cb-e308-4b4d-862a-dd567843100a/token/login'
const clientId = '8ee1287d-71ff-4c85-becd-cba829f390a0'
const redirectUri = 'http://localhost:3000/authenticate/oauth/139a95cb-e308-4b4d-862a-dd567843100a/token/callback'

async function postLoginRequest(data: string): Promise<string> {

  token.value = null
  refreshToken.value = null
  tokenExpiration.value = null

  loading.value = true

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  try {
    const response = await axios.post<TokenResponse>(loginUrl, data, config)

    if (response.status >= 200 && response.status < 300 && response.data.access_token) {
      token.value = response.data.access_token
      refreshToken.value = response.data.refresh_token

      tokenExpiration.value = new Date(Date.now() + tokenDefaultExpiration).toISOString()

      return token.value
    }
  } finally {
    loading.value = false
  }
  throw "Login was not successful"
}

async function login(username: string, password: string): Promise<string> {
  const data = qs.stringify({
    username: username,
    password: password,
    grant_type: 'password',
    client_id: clientId,
  })

  return await postLoginRequest(data)
}

async function refreshLogin() {
  if (!refreshToken.value) {
    throw new Error('No refresh token available')
  }

  const data = qs.stringify({
    refresh_token: refreshToken.value,
    grant_type: 'refresh_token',
    client_id: clientId,
    redirectUri: redirectUri
  })

  try {
    return await postLoginRequest(data)
  } catch (e) {
    refreshToken.value = null
    throw e;
  }
}

async function ensureLogin() : Promise<string> {
  if (!isLoggedIn()) {
    if (canRefresh()) {
      return await refreshLogin()
    }

    throw new Error('Not logged in')
  }

  // check if token is about to expire
  const dateInFiveMinutes = new Date(Date.now() + 5 * 60 * 1000)
  if (tokenExpiration.value !== null && tokenExpirationDate.value < dateInFiveMinutes) {
    return await refreshLogin()
  }

  return token.value as string
}

function logout() {
  token.value = null
  refreshToken.value = null
  tokenExpiration.value = null

  logoutCallbacks.forEach(cb => cb())
}

const logoutCallbacks: (() => void)[] = []

// adds a callback that is called on logout
function onLogout(callback: () => void) {
  logoutCallbacks.push(callback)
}

export function useAuth() {
  return {
    isLoggedIn,
    login,
    token,
    refreshToken,
    ensureLogin,
    logout,
    loading,
    onLogout
  }
}
