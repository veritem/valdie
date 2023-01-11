import { describe, expect, it } from 'vitest'
import { isAccepted } from '../src/index'

describe('isAccepted', () => {
  it('check for acceptance validity', () => {
    expect(isAccepted('1').success).toBeTruthy()
    expect(isAccepted(1).success).toBeTruthy()
    expect(isAccepted(true).success).toBeTruthy()
    expect(isAccepted('yes').success).toBeTruthy()
    expect(isAccepted('on').success).toBeTruthy()
    expect(isAccepted('name').success).toBeFalsy()
    expect(isAccepted(228).success).toBeFalsy()
  })
})
