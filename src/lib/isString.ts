import { ErrorMessage, Response, SuccessMesage } from '../utils/response'

//TODO:  function to check if the passed string is a string
export function isString (str: unknown): Response {
  if (typeof str !== 'string')
    return ErrorMessage(`${str} is not a valid string`)
  return SuccessMesage()
}
