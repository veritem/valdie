import { isAlphaNum } from '../src/index'

describe('isAlphaNum', () => {
  it('check for alphaNum character validity', () => {
    expect(isAlphaNum('email23')).toBeTruthy()
    expect(isAlphaNum('examp2442com')).toBeTruthy()
    expect(isAlphaNum('134emilcom')).toBeTruthy()
  })

  it('check if alphaNum validator fails', () => {
    expect(() => isAlphaNum('mmmm5487u#')).toThrow(
      new Error('mmmm5487u# is not a valid alphaNum')
    )
  })

  it('check if alphaNum validator fails', () => {
    expect(() => isAlphaNum('13345')).toThrow(
      new Error('13345 is not a valid alphaNum')
    )
  })
})
