import { isString } from '../src'
import valdie from '../src/index'

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

  it('should fail for invalid string using builder method', () => {
    let { message, success } = valdie(20).isString().validate()
    expect(success).toBeTruthy()
    expect(message?.length).toEqual(1)
  })
  it('should pass for valid string in builder method', () => {
    let { message, success } = valdie('20').isString().validate()
    expect(success).toBeFalsy()
    expect(message?.length).toEqual(0)
  })
})
