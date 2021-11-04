import { _a } from '../utils/methods'
import { SuccessMesage, Response, ErrorMessage } from 'src/utils/response'
/**
 * Check if value is valid array type
 * @param value value to check
 * @returns true if value is valid
 */
export function isArray(
  value: string | unknown[] | Record<string, unknown>
): Response {
  try {
    if (typeof value === 'object' && _a(value)) return SuccessMesage()

    const testVal = JSON.parse(String(value))
    return _a(testVal)
      ? SuccessMesage()
      : ErrorMessage(`${value} is not a valid array`)
  } catch (e) {
    return ErrorMessage(`${value} is not a valid array`)
  }
}
