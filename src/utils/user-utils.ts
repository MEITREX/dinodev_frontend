import type { Maybe } from '@/utils/types'
import { useGlobalUserService } from '@/service/global-user-service'


export function getDisplayUserName(user: Maybe<{ username: string, id: string }>): string {
  if (user?.id && user.id === useGlobalUserService().currentGlobalUser.value?.id) {
    return 'You'
  }
  return user?.username ?? 'An unknown user'
}
