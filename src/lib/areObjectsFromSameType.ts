import { isObject } from './isObject'

/**
 * Check if objects are of same types or are the same
 * @param obj1 object 1
 * @param obj2 object 2
 * @returns true when they are the same, false when they aren't
 */
export function areObjectsFromSameType(
  obj1: Record<string, unknown>,
  obj2: Record<string, unknown>
): boolean {
  if (!isObject(obj1) && !isObject(obj2)) return false

  const k1 = Object.entries(obj1)

  const k2 = Object.entries(obj2)

  if (k1.length !== k2.length) {
    return false
  }

  for (const key in k1) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }

  return true
}
