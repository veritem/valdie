import { SuccessMesage, Response, ErrorMessage } from '../utils/response'

/**
 * Check if value is valid array type
 * @param value value to check
 * @returns true if value is valid
 */
export function isBoolean(value: string | boolean | number): Response {
  const v = '' + value

  if (
    v === 'false' ||
    v === 'true' ||
    v === 'yes' ||
    v === 'no' ||
    v === '1' ||
    v === '0'
  )
    return SuccessMesage()
  else return ErrorMessage(`${value} is not valid boolean`)
}
