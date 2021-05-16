import { isTel } from '../src/index'

describe('isTel', () => {
  it('check for tel validity', () => {
    expect(isTel('+25 078 044 9380')).toBeTruthy()
    expect(isTel('078 044 9389')).toBeTruthy()
    expect(isTel('0780449389')).toBeTruthy()
  })
})
