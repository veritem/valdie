import ErrorMessage from '../utils/Error'

/* eslint-disable no-useless-escape */
const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

/**
 * Check if value is valid email address
 * @param value value to check
 * @returns true if value is valid
 */
export function isEmail(value: string): boolean {
  if (!emailRegex.test(value)) ErrorMessage(value, 'email')
  return true
}
