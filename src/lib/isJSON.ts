import ErrorMessage from '../utils/Error'

/**
 * check if value is json
 * @param value value to check
 * @returns true when value is a json
 */
export function isJSON(
  value: string | unknown[] | Record<string, unknown>
): boolean {
  if (typeof value === 'object') return true
  if (Number(value)) ErrorMessage(value, 'json')
  try {
    const result = JSON.parse(String(value))
    const type = Object.prototype.toString.call(result)
    return type === '[object Object]' || type === '[object Array]'
  } catch (err) {
    ErrorMessage(value, 'json')
    return false
  }
}
