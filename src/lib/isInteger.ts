import ErrorMessage from '../utils/Error'

/* eslint-disable no-useless-escape */
/**
 * Check if value is valid integer
 * @param value value to check
 * @returns true if value is valid
 */
export function isInteger(value: number): boolean {
  if (!Number.isInteger(value)) ErrorMessage(value, 'integer')
  return true
}
