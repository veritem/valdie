import ErrorMessage from '../utils/Error'

/* eslint-disable no-useless-escape */
const alphaNumRegex = /^([a-zA-Z\d]+)$/i
const alphaRegex = /'^([a-zA-Z]+)$'/

/**
 * Check if value is valid string with only numbers without other characters
 * @param value value to check
 * @returns true if value is valid
 */
export function isAlphaNum(value: string): boolean {
  if (alphaRegex.test(value) || Number(value)) ErrorMessage(value, `alphaNum`) // make sure string is not alpha only or numbers only
  if (!alphaNumRegex.test(value)) ErrorMessage(value, 'alphaNum')
  return true
}
