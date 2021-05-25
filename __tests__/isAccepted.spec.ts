import { isAccepted } from '../src/index'

describe('isAccepted', () => {
  it('check for acceptance validity', () => {
    expect(isAccepted('1')).toBeTruthy()
    expect(isAccepted(1)).toBeTruthy()
    expect(isAccepted(true)).toBeTruthy()
    expect(isAccepted('yes')).toBeTruthy()
    expect(isAccepted('on')).toBeTruthy()
  })
})
