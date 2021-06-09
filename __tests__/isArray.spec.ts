import { isArray } from '../src/index'

describe('isArray', () => {
  it('check for array validity', () => {
    expect(isArray('[0,4,3]')).toBeTruthy()
    expect(isArray([5, 86, 3, 5, ' s'])).toBeTruthy()
    expect(isArray([])).toBeTruthy()
  })

  it('check if array validator fails', () => {
    expect(() => isArray('mmmm')).toThrow(
      new Error('mmmm is not a valid array')
    )
  })

  it('check if array validator fails', () => {
    expect(() => isArray('hell@')).toThrow(
      new Error('hell@ is not a valid array')
    )
  })
})
