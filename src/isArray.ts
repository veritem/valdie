import ErrorMessage from './utils/Error'

/**
 * Check if value is valid array type
 * @param value value to check
 * @returns true if value is valid
 */
export function isArray(value: string): boolean {
  try {
    const testVal = JSON.stringify(value)

    return Array.isArray(testVal) ? true : false
  } catch (e) {
    ErrorMessage(value, 'array')
  }

  return true
}
