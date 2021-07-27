import { ErrorMessage, Response, SuccessMesage } from '../utils/response'

/* eslint-disable no-useless-escape */
export function isInteger(value: number): Response {
  if (!Number.isInteger(value)) ErrorMessage(`${value} is not a vald intiger`)
  return SuccessMesage()
}
