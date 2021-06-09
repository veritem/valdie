import ErrorMessage from '../utils/Error'

/* eslint-disable no-useless-escape */

/**
 * Check if value is valid string without other characters or numbers,
 * except the separator character
 * @param value value to check
 * @returns true if value is valid
 */
export function isAlpha(
  value: string,
  separator: string | null = null
): boolean {
  let alphaRegex

  if (!separator) {
    alphaRegex = new RegExp('^([a-zA-Z]+)$', 'i')
    if (!alphaRegex.test(value)) ErrorMessage(value, `alpha`)
  } else {
    alphaRegex = new RegExp('^([a-zA-Z\\' + separator + ']+)$', 'i')
    if (!alphaRegex.test(value)) ErrorMessage(value, `alpha{${separator}}`)
  }

  return true
}
