import { ErrorMessage, Response, SuccessMesage } from '../utils/response'

/* eslint-disable no-useless-escape */

/**
 * Check if array provided is distinct {no duplicates},
 * except only array
 * @param array array to check
 * @returns true if array does not have duplicates
 */

export function isDistinct(array: unknown[]): Response {
  try {
    const setForArrayValues: Set<unknown> = new Set()

    array.map(item => {
      setForArrayValues.add(item)
    })

    //set can't contain duplicates, so if array is distinct its length must be equal to the one of its set .
    if (array.length === setForArrayValues.size) return SuccessMesage()

    return ErrorMessage(`${array} is not distinct}`)
  } catch (error) {
    return ErrorMessage(`${array} is not distinct}`)
  }
}
