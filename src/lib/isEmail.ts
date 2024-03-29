import { SuccessMesage, Response, ErrorMessage } from '../utils/response'

/* eslint-disable no-useless-escape */
const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

export function isEmail(str: string): Response {
  if (!emailRegex.test(str)) return ErrorMessage(`${str} is not valid email`)
  return SuccessMesage()
}
