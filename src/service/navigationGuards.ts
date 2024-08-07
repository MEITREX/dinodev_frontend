import axios from "axios";
import type { RouteLocationNormalized, RouteLocationRaw } from "vue-router";
import { type TokenResponse, useAuth } from '@/service/use-auth'

export async function onLoginEnter(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
): Promise<RouteLocationRaw | boolean> {
  const oauthCode = to.query["code"] ?? "";
  const state = JSON.parse((to.query["state"] as string | undefined) ?? "{}");
  const auth = useAuth();
  if (oauthCode !== undefined && oauthCode.length > 0) {
    try {
      const url = import.meta.env.VITE_APP_AUTH_ENDPOINT ?? '/auth/oauth'
      const tokenResponse: TokenResponse = (
            await axios.post(url + "/token", {
              grant_type: "authorization_code",
              client_id: await auth.getClientId(),
              code: oauthCode,
              code_verifier: auth.codeVerifier.value
            })).data;

      await auth.handleOAuthResponse(tokenResponse);

      return {
        path: state.from,
        replace: true
      };
    } catch (err) {
      return {
        name: "login",
        replace: true
      };
    }
  }
  return true;
}

