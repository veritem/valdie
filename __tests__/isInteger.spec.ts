import { describe, expect, it } from "vitest"
import { isInteger } from '../src'

describe('Test for integer values', () => {
  it('should pass for small integers', () => {
    const { message, success } = isInteger(1)
    expect(message).toBeUndefined()
    expect(success).toBeTruthy()
  })

  it('should fail for no-integers', () => {
    const { message, success } = isInteger('asskks')
    expect(message).toEqual('asskks is not a valid integer')
    expect(success).toBeFalsy()
  })

  it('Should fail for decimal numbers', () => {
    const { message, success } = isInteger(1.7374)
    expect(message).toEqual('1.7374 is not a valid integer')
    expect(success).toBeFalsy()
  })

  it('should pass for really long integers', () => {
    const { message, success } = isInteger(2 ^ 63)

    expect(message).toBeUndefined()
    expect(success).toBeTruthy()
  })
})
