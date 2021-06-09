import ErrorMessage from '../utils/Error'

/**
 * Check if value is valid array type
 * @param value value to check
 * @returns true if value is valid
 */
export function isArray(
  value: string | unknown[] | Record<string, unknown>
): boolean {
  try {
    if (typeof value === 'object') return Array.isArray(value)

    const testVal = JSON.parse(value as string)
    return Array.isArray(testVal) ? true : false
  } catch (e) {
    ErrorMessage(value, 'array')
  }

  return true
}
