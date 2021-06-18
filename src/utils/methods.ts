export function purifyStringObject(stringObject: string): string {
  return stringObject.replace(/(\w+:)|(\w+ :)/g, function (s) {
    return '"' + s.substring(0, s.length - 1) + '":'
  })
}
