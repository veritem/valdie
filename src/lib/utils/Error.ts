export default function ErrorMessage(value: any, key: any): string {
  throw new Error(`${value} is not a valid ${key}`)
}
