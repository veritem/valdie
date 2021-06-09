import ErrorMessage from '../utils/Error'

/**
 * Check if value is valid string with some common characters, without numbers
 * @param value value to check
 * @param separator any string separator
 * @returns true if value is valid
 */
const alphaCharRegex = /(^[a-zA-Z!@#$%^&*(),.?":{}|<>_~`[\];]+)$/
const alphaRegex = /'^([a-zA-Z]+)$'/
export function isAlphaChar(value: string): boolean {
  /* eslint-disable no-useless-escape */
  if (alphaRegex.test(value)) ErrorMessage(value, `alphaChar`) // make sure string is not alpha only
  if (!alphaCharRegex.test(value)) ErrorMessage(value, `alphaChar`)
  return true
}
