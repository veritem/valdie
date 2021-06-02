import ErrorMessage from './utils/Error'

export default function areObjectsFromSameType(
  object1: any,
  object2: any
): boolean {
  const keys1 = Object.entries(object1)

  const keys2 = Object.entries(object2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (const key in keys1) {
    if (object1[key] !== object2[key]) {
      return false
    }
  }

  return true
}
