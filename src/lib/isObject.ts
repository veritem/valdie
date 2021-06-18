import { _a, purifyStringObject } from '../utils/methods'
import ErrorMessage from '../utils/Error'

/**
 * Function to check if value is object
 * @param value value to be checked
 * @returns true when value is an object
 */
export function isObject(value: unknown): boolean {
  const stringVal = purifyStringObject(String(value))

  //convert to number if possible to avoid confustions to something like '123' which could be treated as string
  value = isNaN(Number(value)) ? value : Number(value)

  //if value is not a string or object then throw a message
  if (typeof value !== 'string' && typeof value !== 'object')
    ErrorMessage(value, 'object')

  try {
    //if value is type object and is array then throw a message
    if (typeof value === 'object' && _a(value)) ErrorMessage(value, 'object')
    //if object is type string parse it to JSON and see if it can be parsed
    else if (typeof value === 'string') {
      const testVal = JSON.parse(stringVal)

      // if parsed value is array then it is not an object we want so we have to throw
      if (_a(testVal)) ErrorMessage(value, 'object')
    }
  } catch (e) {
    ErrorMessage(value, 'object')
  }

  return true
}
