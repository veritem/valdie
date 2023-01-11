import { describe, expect, it } from 'vitest'
import { isArray } from '../src/index'

describe('isArray', () => {
  it('check for array validity', () => {
    expect(isArray('[0,4,3]').success).toBeTruthy()
    expect(isArray([5, 86, 3, 5, ' s']).success).toBeTruthy()
    expect(isArray([]).success).toBeTruthy()
  })

  it('check if array validator fails', () => {
    expect(isArray('mmmm').success).toBeFalsy()
  })

  it('check if array validator fails', () => {
    expect(isArray('hell@').success).toBeFalsy()
  })
})
