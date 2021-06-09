import ErrorMessage from '../utils/Error'

/**
 * check if value is json
 * @param value value to check
 * @returns true when value is a json
 */
export function isJSON(value: string): boolean {
  if (typeof value !== 'string') {
    ErrorMessage(value, 'json')
    return false
  }
  try {
    const result = JSON.parse(value)
    const type = Object.prototype.toString.call(result)
    return type === '[object Object]' || type === '[object Array]'
  } catch (err) {
    ErrorMessage(value, 'json')
    return false
  }
}
