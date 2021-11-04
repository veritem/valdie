import { SuccessMesage, Response, ErrorMessage } from '../utils/response'

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
): Response {
  let alphaRegex

  if (!separator) {
    alphaRegex = new RegExp('^([a-zA-Z]+)$', 'i')
    if (!alphaRegex.test(value))
      return ErrorMessage(`${value} is not a valid alpha`)
  } else {
    alphaRegex = new RegExp('^([a-zA-Z\\' + separator + ']+)$', 'i')
    if (!alphaRegex.test(value))
      return ErrorMessage(`${value} is not a valid alpha{${separator}}`)
  }

  return SuccessMesage()
}
