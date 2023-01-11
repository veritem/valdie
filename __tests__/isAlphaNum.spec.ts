import { describe, expect, it } from 'vitest'
import { isAlphaNum } from '../src/index'

describe('isAlphaNum', () => {
  it('check for alphaNum character validity', () => {
    expect(isAlphaNum('email23').success).toBeTruthy()
    expect(isAlphaNum('examp2442com').success).toBeTruthy()
    expect(isAlphaNum('134emilcom').success).toBeTruthy()
  })

  it('check if alphaNum validator fails', () => {
    expect(isAlphaNum('mmmm5487u#').success).toBeFalsy()
  })

  it('check if alphaNum validator fails', () => {
    expect(isAlphaNum('13345').success).toBeFalsy()
  })
})
