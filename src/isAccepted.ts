import ErrorMessage from './utils/Error'

/**
 * Check if value is accepted (true,yes,1 or on)
 * @param {string | number | boolean} str value to be checked
 * @returns {boolean} returns true if value is accepted
 */
export function isAccepted(str: string | number | boolean): boolean {
  let valid = false

  if (typeof str === 'string' && (str === 'yes' || str === 'on' || str === '1'))
    valid = true
  if (typeof str === 'number' && str === 1) valid = true

  if (typeof str === 'boolean' && str) valid = true
  if (!valid) ErrorMessage(str, 'tel')
  return true
}
