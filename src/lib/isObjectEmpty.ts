import ErrorMessage from '../utils/Error'

/* eslint-disable no-useless-escape */
export function isObjectEmpty(value: unknown[]): boolean {
  if (!(Object.keys(value).length === 0)) ErrorMessage(value, 'empty object')
  return true
}
