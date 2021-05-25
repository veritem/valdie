import ErrorMessage from './utils/Error'

export function isAccepted(str: string | number | boolean): boolean {
  let valid = false

  if (typeof str === 'string' && (str === 'yes' || str === 'on' || str === '1'))
    valid = true
  if (typeof str === 'number' && str === 1) valid = true

  if (typeof str === 'boolean' && str) valid = true
  if (!valid) ErrorMessage(str, 'tel')
  return true
}
