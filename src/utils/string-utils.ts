import { isPresent, type Maybe } from '@/utils/types'

export function isNotBlank(value: string | null | undefined): boolean {
  return value !== null && value !== undefined && value.trim() !== ''
}

export function abbreviate(value: Maybe<string>, maxLength: number): string {
  if (!isPresent(value)) {
    return ''
  }
  if (value.length <= maxLength) {
    return value
  }

  return value.substring(0, maxLength - 3) + '...'
}
