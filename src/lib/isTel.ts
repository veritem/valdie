import { ErrorMessage, Response, SuccessMesage } from '../utils/response'
/* eslint-disable no-useless-escape */
const telRegex =
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i

export function isTel(str: string): Response {
  if (!telRegex.test(str)) ErrorMessage(`${str} is not a valid telephone`)
  return SuccessMesage()
}
