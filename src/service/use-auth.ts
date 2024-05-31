import { ref } from 'vue'
import axios from 'axios'
import qs from 'qs'
import { useLocalStorage } from '@vueuse/core'
import { runOnce } from '@/utils/run-once'

interface TokenResponse {
  access_token: string;
  refresh_token: string;
}

const token = useLocalStorage('token', null as string | null)
const refreshToken = useLocalStorage('refreshToken', null as string | null)

const loading = ref(false)

function isLoggedIn(): boolean {
  if (token.value === null) {
    return false
  }

  return refreshToken.value !== null
}

// get url from env
const loginUrl = import.meta.env.VITE_APP_LOGIN_URL ?? '/api/login'
const clientIdUrl = import.meta.env.VITE_APP_CLIENT_ID_URL ?? '/api/client-id'
let clientId: string | null = import.meta.env.VITE_APP_FIXED_CLIENT_ID ?? null

async function getClientId() {
  if (clientId !== null) {
    return clientId
  }

  // client id api returns id in plain text
  const response = await axios.get(clientIdUrl)
  clientId = response.data
  return clientId
}

async function postLoginRequest(data: string): Promise<string> {
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

      return token.value
    }
  } finally {
    loading.value = false
  }
  token.value = null
  refreshToken.value = null
  throw new Error('Login failed')
}

async function login(username: string, password: string): Promise<string> {
  logout()

  const data = qs.stringify({
    username: username,
    password: password,
    grant_type: 'password',
    client_id: await getClientId(),
  })

  return await postLoginRequest(data)
}

const refreshLogin = runOnce(async () => {
  if (!refreshToken.value) {
    throw new Error('No refresh token available')
  }

  const data = qs.stringify({
    refresh_token: refreshToken.value,
    grant_type: 'refresh_token',
    client_id: await getClientId(),
  })

  return await postLoginRequest(data);
})

function logout() {
  token.value = null
  refreshToken.value = null

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
    refreshLogin,
    logout,
    loading,
    onLogout
  }
}
