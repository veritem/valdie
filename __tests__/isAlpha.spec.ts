import { isAlpha } from '../src/index'

describe('isAlpha', () => {
  it('check for alphabet validity', () => {
    expect(isAlpha('email')).toBeTruthy()
    expect(isAlpha('examplecom')).toBeTruthy()
    expect(isAlpha('emailcom')).toBeTruthy()
    expect(isAlpha('ema-ilcom', '-')).toBeTruthy()
    expect(isAlpha('em,ail,com', ',')).toBeTruthy()
  })

  it('check if alpha validator fails', () => {
    expect(() => isAlpha('mmmm5487u#')).toThrow(
      new Error('mmmm5487u# is not a valid alpha')
    )
  })

  it('check if alpha validator fails', () => {
    expect(() => isAlpha('hell@')).toThrow(
      new Error('hell@ is not a valid alpha')
    )
  })
})
