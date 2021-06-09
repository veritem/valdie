import ErrorMessage from '../utils/Error'

/* eslint-disable no-useless-escape */
const telRegex =
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i

/**
 * Check if value is valid telephone number
 * @param value value to check
 * @returns true if value is valid
 */
export function isTel(value: string): boolean {
  if (!telRegex.test(value)) ErrorMessage(value, 'tel')
  return true
}
