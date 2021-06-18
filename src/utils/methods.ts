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
  return stringObject.replace(/(\w+:)|(\w+ :)/g, function (s) {
    return '"' + s.substring(0, s.length - 1) + '":'
  })
}
