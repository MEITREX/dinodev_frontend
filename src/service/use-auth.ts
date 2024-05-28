import { ref } from 'vue'
import axios from 'axios'
import qs from 'qs'
import { useLocalStorage } from '@vueuse/core'

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
const loginUrl = import.meta.env.VITE_APP_LOGIN_URL ?? 'http://localhost:12200/authenticate/oauth/139a95cb-e308-4b4d-862a-dd567843100a/token'
const clientId = '8ee1287d-71ff-4c85-becd-cba829f390a0'
const redirectUri = 'http://localhost:12200/authenticate/oauth/139a95cb-e308-4b4d-862a-dd567843100a/token/callback'

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
  } catch (e) {
    token.value = null
    refreshToken.value = null
    throw new Error('Login failed')
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
    client_id: clientId,
  })

  return await postLoginRequest(data)
}

let refreshOperationInProgress: Promise<string> | null = null;

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

  if (refreshOperationInProgress) {
    return refreshOperationInProgress;
  }

  // Start the refresh operation and store the promise
  refreshOperationInProgress = (async () => {
    try {
      return await postLoginRequest(data);
    } finally {
      refreshOperationInProgress = null;
    }
  })();

  return refreshOperationInProgress;
}

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
