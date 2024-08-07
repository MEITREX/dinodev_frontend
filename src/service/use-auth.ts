import { ref } from 'vue'
import axios from 'axios'
import qs from 'qs'
import { useLocalStorage } from '@vueuse/core'
import { runOnce } from '@/utils/run-once'
import type { RouteLocationNormalized } from 'vue-router'

export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
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
const loginUrl = import.meta.env.VITE_APP_AUTH_ENDPOINT ?? '/auth/oauth/token'
const clientIdUrl = import.meta.env.VITE_APP_CLIENT_ID_URL ?? '/api/client-id'
let clientId: string | null = import.meta.env.VITE_APP_FIXED_CLIENT_ID ?? null

async function getClientId() {
  if (clientId !== null) {
    return clientId
  }

  // client id api returns id in plain text
  const response = await axios.get(clientIdUrl)
  clientId = response.data
  return clientId!!
}

const authEndpoint = import.meta.env.VITE_APP_AUTH_ENDPOINT ?? '/auth/oauth/'

function base64URLEncode(str: string): string {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

const codeVerifier = useLocalStorage('codeVerifier', null as string | null)

export async function buildOAuthUrl(redirectTo: string): Promise<string> {
  const codeVerifierArray = new Uint8Array(32)
  crypto.getRandomValues(codeVerifierArray)
  codeVerifier.value = base64URLEncode(String.fromCharCode.apply(null, Array.from(codeVerifierArray)))
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier.value))
  const codeChallenge = base64URLEncode(String.fromCharCode.apply(null, Array.from(new Uint8Array(hash))))
  return (
    `${authEndpoint}/authorize?` +
    new URLSearchParams({
      client_id: await getClientId(),
      response_type: 'code',
      scope: 'backend',
      redirect_uri: window.location.origin + '/login',
      state: JSON.stringify({ from: redirectTo }),
      code_challenge_method: 'S256',
      code_challenge: codeChallenge
    }).toString()
  )
}

async function postLoginRequest(data: string): Promise<string> {
  loading.value = true

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  try {
    const response = await axios.post<TokenResponse>(loginUrl + "/token", data, config)

    if (response.status >= 200 && response.status < 300 && response.data.access_token) {
      token.value = response.data.access_token
      refreshToken.value = response.data.refresh_token

      return token.value
    }
  } catch (e) {
    logout()
    throw new Error('Login failed')
  } finally {
    loading.value = false
  }
  logout()
  throw new Error('Login failed')
}

async function authorizeIfRequired(redirectPath: string) {
  const store = useAuth();
  if (!(store.isLoggedIn())) {
    window.location.href = await buildOAuthUrl(redirectPath);
    return true;
  }
  return true;
}

async function handleOAuthResponse(tokenResponse: TokenResponse) {
  token.value = tokenResponse.access_token;
  refreshToken.value = tokenResponse.refresh_token;
}
//
// async function login(username: string, password: string): Promise<string> {
//   logout()
//
//   const data = qs.stringify({
//     username: username,
//     password: password,
//     grant_type: 'password',
//     client_id: await getClientId()
//   })
//
//   return await postLoginRequest(data)
// }


const refreshLogin = runOnce(async () => {
  if (!refreshToken.value) {
    throw new Error('No refresh token available')
  }

  const data = qs.stringify({
    refresh_token: refreshToken.value,
    grant_type: 'refresh_token',
    client_id: await getClientId()
  })

  return await postLoginRequest(data)
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
    token,
    refreshToken,
    refreshLogin,
    logout,
    loading,
    onLogout,
    codeVerifier,
    authorizeIfRequired,
    handleOAuthResponse,
    getClientId
  }
}
