import { ErrorMessage, Response, SuccessMesage } from '../utils/response'

/* eslint-disable no-useless-escape */
export function isInteger (value: any): Response {
  if (!Number.isInteger(value))
    return ErrorMessage(`${value} is not a valid integer`)
  return SuccessMesage()
}
