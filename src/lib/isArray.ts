import { _a } from '../utils/methods'
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
    if (typeof value === 'object') return _a(value)

    const testVal = JSON.parse(String(value))
    return _a(testVal) ? true : false
  } catch (e) {
    ErrorMessage(value, 'array')
  }

  return true
}
