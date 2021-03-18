import ErrorMessage from './utils/Error'

/* eslint-disable no-useless-escape */
const phoneRegex = /^[0-9]*$/

export default function isEmail(val: any): boolean {
  if (!phoneRegex.test(val)) ErrorMessage(val, 'integer')
  return true
}
