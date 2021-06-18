export function isObjectEmpty(value: Record<string, unknown>): boolean {
  return Object.keys(value).length === 0
}
