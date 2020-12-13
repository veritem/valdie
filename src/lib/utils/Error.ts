export default function ErrorMessage(value: string, key: string): string {
  throw new Error(`${value} is not a valid ${key}`)
}
