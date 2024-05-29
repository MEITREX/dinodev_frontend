export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type Maybe<T> = T | null | undefined

export function isPresent<T>(value: T): value is Exclude<T, null | undefined> {
  return value !== null && value !== undefined
}
