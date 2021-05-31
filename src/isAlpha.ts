import ErrorMessage from './utils/Error'

/* eslint-disable no-useless-escape */
const alphaRegex = /^([a-zA-Z]+)$/

/**
 * Check if value is valid string without other characters or numbers
 * @param value value to check
 * @returns true if value is valid
 */
export function isAlpha(value: string): boolean {
  if (!alphaRegex.test(value)) ErrorMessage(value, 'alpha')
  return true
}
