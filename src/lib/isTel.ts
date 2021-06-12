import ErrorMessage from '../utils/Error'

/* eslint-disable no-useless-escape */
const telRegex =
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i

export function isTel(str: string): boolean {
  if (!telRegex.test(str)) ErrorMessage(str, 'tel')
  return true
}
