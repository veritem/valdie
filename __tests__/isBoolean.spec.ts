import { describe, expect, it } from "vitest"
import { isBoolean } from '../src/index'

describe('isBoolean', () => {
  it('check for boolean validity', () => {
    expect(isBoolean('yes').success).toBeTruthy()
    expect(isBoolean(true).success).toBeTruthy()
    expect(isBoolean(1).success).toBeTruthy()
    expect(isBoolean('no').success).toBeTruthy()
    expect(isBoolean(false).success).toBeTruthy()
    expect(isBoolean('0').success).toBeTruthy()
  })

  it('check if boolean validator fails', () => {
    expect(isBoolean('mmmm').success).toBeFalsy()
  })

  it('check if boolean validator fails', () => {
    expect(isBoolean('hell@').success).toBeFalsy()
  })
})
