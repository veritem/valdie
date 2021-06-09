import ErrorMessage from '../utils/Error'

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
