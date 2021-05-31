import ErrorMessage from './utils/Error'

/* eslint-disable no-useless-escape */
const alphaNumRegex = /^([a-zA-Z\d]+)$/i

/**
 * Check if value is valid string with only numbers without other characters
 * @param value value to check
 * @returns true if value is valid
 */
export function isAlphaNum(value: string): boolean {
  if (!alphaNumRegex.test(value)) ErrorMessage(value, 'alphaNum')
  return true
}
