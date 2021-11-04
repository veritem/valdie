import { SuccessMesage, Response, ErrorMessage } from '../utils/response'

/**
 * Check if value is accepted (true,yes,1 or on)
 * @param {string | number | boolean} value value to be checked
 * @returns {boolean} returns true if value is accepted
 */
export function isAccepted(value: string | number | boolean): Response {
  let valid = false

  if (
    typeof value === 'string' &&
    (value === 'yes' || value === 'on' || value === '1')
  )
    valid = true
  if (typeof value === 'number' && value === 1) valid = true

  if (typeof value === 'boolean' && value) valid = true
  if (!valid) return ErrorMessage(`${value} is not a valid tel`)
  return SuccessMesage()
}
