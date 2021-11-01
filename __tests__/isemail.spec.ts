import { isEmail } from '../src/index'
import valide from '../src/index'

describe('Test email validator', () => {
  it('should susecced', () => {
    const { message, success } = isEmail('email@example.com')
    expect(message).toBeUndefined()
    expect(success).toBeTruthy()
  })

  it('should fail', () => {
    let email = 'emailexample.com'
    const { message, success } = isEmail(email)
    expect(message).toEqual(`${email} is not valid email`)
    expect(success).toBeFalsy()
  })

  it('should succed', () => {
    const { message, success } = valide('mugaboverite@gmail.com')
      .isString()
      .validate()

    expect(success).toBeFalsy()
    expect(message?.length).toEqual(0)
  })
})
