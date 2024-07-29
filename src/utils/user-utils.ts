import type { Maybe } from '@/utils/types'
import { useGlobalUserService } from '@/service/global-user-service'


/**
 * Returns a readable name for the user.
 * If the user is the current user, it returns 'You'.
 */
export function getDisplayUserName(user: Maybe<{ username: string, id: string }>): string {
  if (user?.id && user.id === useGlobalUserService().currentGlobalUser.value?.id) {
    return 'You'
  }
  return user?.username ?? 'An unknown user'
}
