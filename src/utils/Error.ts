export default function ErrorMessage(value: unknown, key: unknown): string {
  throw new Error('value'+value+' is not a valid '+key)
}
