import { isString } from '../src'

describe('is value a string', () => {
  it('check if string is not valid', () => {
    expect(() => isString(1)).toThrow(
      new Error('1 is not a valid string')
    )
  })

 it('check when it is a valid string', () => {
    expect(isString('maakaj')).toBeTruthy()
    expect(isString('1221')).toBeTruthy()
    expect(isString('dsjk')).toBeTruthy()
  })})
