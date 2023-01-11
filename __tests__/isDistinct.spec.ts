import { describe, expect, it } from 'vitest'
import { isDistinct } from '../src'

describe('isDistinct', () => {
  it('should succeed .', () => {
    expect(isDistinct([1, 3, 2, 4, 5, 6, 7, 8, 9, 0]).success).toBeTruthy()
    expect(isDistinct(['string', 'another string']).success).toBeTruthy()
    expect(isDistinct([true, false]).success).toBeTruthy()
  })

  it('should fail .', () => {
    expect(isDistinct([1, 1, 3, 4, 2]).success).toBeFalsy()
    expect(
      isDistinct(['string', 'string', 'another string']).success
    ).toBeFalsy()
    expect(isDistinct([true, true]).success).toBeFalsy()
  })
})
