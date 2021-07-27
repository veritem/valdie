import { ErrorMessage, Response, SuccessMesage } from '../utils/response'

/* eslint-disable no-useless-escape  */
export function isObjectEmpty(value: any): Response {
  if (!(Object.keys(value).length === 0)) ErrorMessage(`${value} is empty`)
  return SuccessMesage()
}
