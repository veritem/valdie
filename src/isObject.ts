import ErrorMessage from './utils/Error'

export default function isObject(value: any): boolean {
  if (typeof value !== 'object' && value !== null) ErrorMessage(value, 'object')

  return true
}
