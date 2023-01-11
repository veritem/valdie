import { describe, expect, it } from 'vitest'
import { isAlphaChar } from '../src/index'

describe('isAlphaChar', () => {
  it('check for alphachar character validity', () => {
    expect(isAlphaChar('email@').success).toBeTruthy()
    expect(isAlphaChar('example!com').success).toBeTruthy()
    expect(isAlphaChar('ema!$%$ilcom').success).toBeTruthy()
  })

  it('check if alphachar validator fails', () => {
    expect(isAlphaChar('mmmm5487u#').success).toBeFalsy()
  })

  it('check if alphachar validator fails', () => {
    expect(isAlphaChar('13345').success).toBeFalsy()
  })
})
