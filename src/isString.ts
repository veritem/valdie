import ErrorMessage from './utils/Error'

//TODO:  function to check if the passed string is a string
/**
 * Check if valus is a string
 * @param value value to check
 * @returns true if value is valid
 */
export function isString(value: unknown): boolean {
  if (typeof value !== 'string') ErrorMessage(value, 'string')
  return true
}
