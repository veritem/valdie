import { isAlpha } from '../src/index'

describe('isEMail', () => {
  it('check for email validity', () => {
    expect(isAlpha('email@example.com')).toBeTruthy()
    expect(isAlpha('_______@example.com')).toBeTruthy()
    expect(isAlpha('email@example.com')).toBeTruthy()
  })

  it('check if email validator fails', () => {
    expect(() => isAlpha('mmmm')).toThrow(
      new Error('mmmm is not a valid email')
    )
  })

  it('check if email validator fails', () => {
    expect(() => isAlpha('hell@')).toThrow(
      new Error('hell@ is not a valid email')
    )
  })
})
