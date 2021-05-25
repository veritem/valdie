import ErrorMessage from './utils/Error'

/* eslint-disable no-useless-escape */
const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

/**
 * Check if value is valid email address
 * @param str value to check
 * @returns true if value is valid
 */
export function isEmail(str: string): boolean {
  if (!emailRegex.test(str)) ErrorMessage(str, 'email')
  return true
}
