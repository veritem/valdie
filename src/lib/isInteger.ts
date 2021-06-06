import ErrorMessage from './utils/Error'

/* eslint-disable no-useless-escape */
export function isInteger(value: number): boolean {
  if (!Number.isInteger(value)) ErrorMessage(value, 'integer')
  return true
}
