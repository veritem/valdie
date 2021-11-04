import { ErrorMessage, Response, SuccessMesage } from '../utils/response'

/**
 * check if value is json
 * @param value value to check
 * @returns true when value is a json
 */
export function isJSON(
  value: string | unknown[] | Record<string, unknown>
): Response {
  if (typeof value === 'object') return SuccessMesage()
  if (Number(value)) return ErrorMessage(`${value} is not a valid json`)
  try {
    const result = JSON.parse(String(value))
    const type = Object.prototype.toString.call(result)
    if (type === '[object Object]' || type === '[object Array]')
      return SuccessMesage()
    return ErrorMessage(`${value} is not a valid json`)
  } catch (err) {
    return ErrorMessage(`${value} is not a valid json`)
  }
}
