/**
 * Function that converts object string into a valid object valid string so that it can be easily parsed in JSON.parse()
 * function,
 * example of transformation
 *  - {"name":"foo", age : 22} => {"name":"foo", "age" : 22}
 *
 * The function only focus on object keys, it does not care
 * @param stringObject object string to convert
 * @returns returns formated string
 */
export function purifyStringObject(stringObject: string): string {
  return trim(stringObject, false).replace(/(\w+:)|(\w+ :)/g, function (s) {
    return '"' + s.substring(0, s.length - 1) + '":'
  })
}

/**
 * Function to trim any string
 * @param value value to trim
 * @param withSpace default: true, true when you want your string to have only one space or false when you want your string to have no space
 * @returns trimed string
 */
export function trim(value: string, withSpace = true): string {
  return withSpace ? value.replace(/\s+/g, ' ') : value.replace(/\s+/g, '')
}

/**
 * Minified Array.isArray()
 * @param arrTest value to test
 * @returns truen when is array according to Array.isArray
 */
export function _a(arrTest: unknown | unknown[]): boolean {
  return Array.isArray(arrTest)
}
