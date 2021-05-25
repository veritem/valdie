import ErrorMessage from './utils/Error'

/**
 * Check if value is accepted (true,yes,1 or on)
 * @param {string | number | boolean} value value to be checked
 * @returns {boolean} returns true if value is accepted
 */
export function isAccepted(value: string | number | boolean): boolean {
  let valid = false

  if (
    typeof value === 'string' &&
    (value === 'yes' || value === 'on' || value === '1')
  )
    valid = true
  if (typeof value === 'number' && value === 1) valid = true

  if (typeof value === 'boolean' && value) valid = true
  if (!valid) ErrorMessage(value, 'tel')
  return true
}
