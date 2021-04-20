import { isInteger } from '../src'

describe('isInteger', () => {
  it('should pass for integer value', () => {
    expect(isInteger(1)).toBeTruthy()
  })

  it('should pass for big integer value', () => {
    expect(isInteger(1340047646)).toBeTruthy()
  })
})
