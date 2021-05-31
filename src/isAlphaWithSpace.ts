import ErrorMessage from './utils/Error'

/* eslint-disable no-useless-escape */
const alphaRegex = /^([a-zA-Z\s]+)$/i

/**
 * Check if value is valid string with only space without other characters or numbers
 * @param value value to check
 * @returns true if value is valid
 */
export function isAlphaWithSpace(value: string): boolean {
  if (!alphaRegex.test(value)) ErrorMessage(value, 'alphaWithSpace')
  return true
}
