import { isAlphaChar } from '../src/index'

describe('isAlphaChar', () => {
  it('check for alphachar character validity', () => {
    expect(isAlphaChar('email@')).toBeTruthy()
    expect(isAlphaChar('example!com')).toBeTruthy()
    expect(isAlphaChar('ema!$%$ilcom')).toBeTruthy()
  })

  it('check if alphachar validator fails', () => {
    expect(() => isAlphaChar('mmmm5487u#')).toThrow(
      new Error('mmmm5487u# is not a valid alphaChar')
    )
  })

  it('check if alphachar validator fails', () => {
    expect(() => isAlphaChar('13345')).toThrow(
      new Error('13345 is not a valid alphaChar')
    )
  })
})
