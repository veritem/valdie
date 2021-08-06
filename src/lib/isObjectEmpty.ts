import { ErrorMessage, Response, SuccessMesage } from '../utils/response'

/* eslint-disable no-useless-escape  */
export function isObjectEmpty (value: any): Response {
  if (!(Object.keys(value).length === 0))
    return ErrorMessage(`Object is not empty`)
  return SuccessMesage()
}
