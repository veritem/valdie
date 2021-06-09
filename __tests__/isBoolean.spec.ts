import { isBoolean } from '../src/index'

describe('isBoolean', () => {
  it('check for boolean validity', () => {
    expect(isBoolean('yes')).toBeTruthy()
    expect(isBoolean(true)).toBeTruthy()
    expect(isBoolean(1)).toBeTruthy()
    expect(isBoolean('no')).toBeTruthy()
    expect(isBoolean(false)).toBeTruthy()
    expect(isBoolean('0')).toBeTruthy()
  })

  it('check if boolean validator fails', () => {
    expect(() => isBoolean('mmmm')).toThrow(
      new Error('mmmm is not a valid boolean')
    )
  })

  it('check if boolean validator fails', () => {
    expect(() => isBoolean('hell@')).toThrow(
      new Error('hell@ is not a valid boolean')
    )
  })
})
