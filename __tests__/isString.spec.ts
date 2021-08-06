import { isString } from '../src'

describe('is value a string', () => {
  it('should succes if its a valid string', () => {
    const { message, success } = isString('hhhhhh')
    expect(message).toBeUndefined()
    expect(success).toBeTruthy()
  })

  it('should fail if it not a valid string', () => {
    const { message, success } = isString(11)
    expect(message).toEqual(`11 is not a valid string`)
    expect(success).toBeFalsy()
  })
})
