import { isInteger } from '../src'

describe('isInteger', () => {
  it('should pass for integer value', () => {
    expect(isInteger(1)).toBeTruthy()
  })

  it('should pass for big integer value', () => {
    expect(isInteger(1340047646)).toBeTruthy()
  })

  it('should fail for decimals and floats', () => {
    expect(() => isInteger(1.7374)).toThrow(
      new Error('1.7374 is not a valid integer')
    )
  })

  it('should fail for invalid inputs', () => {
    expect(() => isInteger((2 ^ 63) - 1)).not.toBe(true)
  })
})
