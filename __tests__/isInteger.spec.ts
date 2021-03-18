import { isInteger } from '../src'

describe('isInteger', () => {
  it('should pass for integer value', () => {
    expect(isInteger(1)).toBeTruthy()
  })

  it('should pass for big integer value', () => {
    expect(isInteger(1340047646)).toBeTruthy()
  })

  it('Should fail for non integer values', () => {
    expect(() => isInteger('one')).toThrow(
      new Error('one is not a valid integer')
    )
  })

  it('should fail for non iteger characters', () => {
    expect(() => isInteger('#$%')).toThrow(
      new Error('#$% is not a valid integer')
    )
  })
})
