import ErrorMessage from './utils/Error'

//TODO:  function to check if the passed string is a string
export function isString(value: unknown): boolean {
  if (typeof value !== 'string') ErrorMessage(value, 'string')
  return true
}
