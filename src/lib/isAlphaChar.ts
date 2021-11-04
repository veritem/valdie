import { SuccessMesage, Response, ErrorMessage } from 'src/utils/response'

/**
 * Check if value is valid string with some common characters, without numbers
 * @param value value to check
 * @param separator any string separator
 * @returns true if value is valid
 */
const alphaCharRegex = /(^[a-zA-Z!@#$%^&*(),.?":{}|<>_~`[\];]+)$/
const alphaRegex = /'^([a-zA-Z]+)$'/
export function isAlphaChar(value: string): Response {
  /* eslint-disable no-useless-escape */
  if (alphaRegex.test(value))
    return ErrorMessage(`${value} is not valid alphaChar`) // make sure string is not alpha only
  if (!alphaCharRegex.test(value))
    return ErrorMessage(`${value} is not valid alphaChar`)
  return SuccessMesage()
}
