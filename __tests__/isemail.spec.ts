import { isEmail } from '../src/index'

describe('isEMail', () => {
  it('check for email validity', () => {
    expect(isEmail('email@example.com')).toBeTruthy()
    expect(isEmail('_______@example.com')).toBeTruthy()
    expect(isEmail('email@example.com')).toBeTruthy()
  })

  it('check if email validator fails', () => {
    expect(() => isEmail('mmmm')).toThrow(
      new Error('mmmm is not a valid email')
    )
  })

  it('check if email validator fails', () => {
    expect(() => isEmail('hell@')).toThrow(
      new Error('hell@ is not a valid email')
    )
  })
})
