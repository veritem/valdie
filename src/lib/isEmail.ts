import ErrorMessage from '../utils/Error'

/* eslint-disable no-useless-escape */
const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

export function isEmail(str: string): boolean {
  if (!emailRegex.test(str)) ErrorMessage(str, 'email')
  return true
}
