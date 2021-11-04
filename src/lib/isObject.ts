import { purifyStringObject } from '../utils/methods'
import { ErrorMessage, Response, SuccessMesage } from '../utils/response'

export function isObject(value: unknown): Response {
  try {
    if ((value as string).constructor === Object) return SuccessMesage()

    const obj = JSON.parse(purifyStringObject(value as string))

    if (typeof obj !== 'object')
      return ErrorMessage(`${value} is not valid object`)

    return SuccessMesage()
  } catch (e) {
    return ErrorMessage(`${value} is not valid object`)
  }
}
