import { describe, expect, it } from 'vitest'
import { isAlpha } from '../src/index'

describe('isAlpha', () => {
  it('check for alphabet validity', () => {
    expect(isAlpha('email').success).toBeTruthy()
    expect(isAlpha('examplecom').success).toBeTruthy()
    expect(isAlpha('emailcom').success).toBeTruthy()
    expect(isAlpha('ema-ilcom', '-').success).toBeTruthy()
    expect(isAlpha('em,ail,com', ',').success).toBeTruthy()
  })

  it('check if alpha validator fails', () => {
    expect(isAlpha('mmmm5487u#').success).toBeFalsy()
  })

  it('check if alpha validator fails', () => {
    expect(isAlpha('hell@').success).toBeFalsy()
  })
})
