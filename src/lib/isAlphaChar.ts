import ErrorMessage from './utils/Error'

/**
 * Check if value is valid string with only specified character, without other characters or numbers
 * @param value value to check
 * @param separator any string separator
 * @returns true if value is valid
 */
export function isAlphaChar(value: string, separator = '-'): boolean {
  /* eslint-disable no-useless-escape */
  const alphaCharRegex = new RegExp('^([a-zA-Z\\' + separator + ']+)$', 'i')

  if (!alphaCharRegex.test(value))
    ErrorMessage(value, `alphaChar ${separator} `)
  return true
}
