import ErrorMessage from './utils/Error'

/* eslint-disable no-useless-escape */
const alphaSpaceRegex = /^([a-zA-Z\s]+)$/i

/**
 * Check if value is valid string with only space without other characters or numbers
 * @param value value to check
 * @returns true if value is valid
 */
export function isAlphaSpace(value: string): boolean {
  if (!alphaSpaceRegex.test(value)) ErrorMessage(value, 'alphaSpace')
  return true
}
