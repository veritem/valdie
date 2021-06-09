import ErrorMessage from '../utils/Error'

/**
 * Check if value is valid array type
 * @param value value to check
 * @returns true if value is valid
 */
export function isBoolean(value: string | boolean | number): boolean {
  const v = '' + value

  if (
    v === 'false' ||
    v === 'true' ||
    v === 'yes' ||
    v === 'no' ||
    v === '1' ||
    v === '0'
  )
    return true
  else ErrorMessage(value, 'boolean')
  return false
}
