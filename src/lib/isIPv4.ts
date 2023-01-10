import { ErrorMessage, Response, SuccessMesage } from '../utils/response'

/* eslint-disable no-useless-escape */
const ipv4Regex =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
/**
 * ## isIPv4
 * @param  value The ip address version 4 to test
 * @returns { Response } a valdie response
 */

export function isIPv4(value: string): Response {
  if (ipv4Regex.test(value) == false)
    return ErrorMessage(`${value} is not a valid IPv4`)
  return SuccessMesage()
}
