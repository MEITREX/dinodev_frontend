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

const tokenExpiration = useLocalStorage('tokenExpiration', null as Date | null)
const tokenDefaultExpiration = 30 * 60 * 1000 // 30 minutes

function isLoggedIn(): boolean {
  if (token.value === null) {
    return false
  }
  if (tokenExpiration.value === null) {
    return false
  }
  return tokenExpiration.value >= new Date();

}

function canRefresh() {
  return refreshToken.value !== null
}

const loginUrl = 'http://localhost:9009/realms/GITS/protocol/openid-connect/token'
const clientId = 'scrum-game-frontend'


async function postLoginRequest(data: string): Promise<string> {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const response = await axios.post<TokenResponse>(loginUrl, data, config)

  if (response.status === 200 && response.data.access_token) {
    token.value = response.data.access_token
    refreshToken.value = response.data.refresh_token

    tokenExpiration.value = new Date(Date.now() + tokenDefaultExpiration)

    return token.value
  }

  throw new Error('Login failed')
}

async function login(username: string, password: string): Promise<string> {
  console.info('Logging in')
  const data = qs.stringify({
    username: username,
    password: password,
    grant_type: 'password',
    client_id: clientId,
  })

  const token =  await postLoginRequest(data)
  console.info('Logged in successfully')
  return token
}

async function refreshLogin() {
  console.info('Refreshing token')
  if (!refreshToken.value) {
    throw new Error('No refresh token available')
  }

  const data = qs.stringify({
    refresh_token: refreshToken.value,
    grant_type: 'refresh_token',
    client_id: clientId,
  })

  return await postLoginRequest(data)
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
  if (tokenExpiration.value !== null && tokenExpiration.value < dateInFiveMinutes) {
    return await refreshLogin()
  }

  return token.value as string
}

function logout() {
  token.value = null
  refreshToken.value = null
  tokenExpiration.value = null
}

export function useAuth() {
  return {
    isLoggedIn,
    canRefresh,
    login,
    refreshLogin,
    token,
    refreshToken,
    ensureLogin,
    logout
  }
}
