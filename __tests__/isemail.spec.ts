import { isEmail } from '../src/index'


describe('Test email validator', () => {
  it('should sussecced', () => {
    const { message, success } = isEmail('email@example.com')
    expect(message).toBeUndefined()
    expect(success).toBeTruthy()
  })

  it('should fail', () => {
    let email = "emailexample.com"
    const { message, success } = isEmail(email)
    expect(message).toEqual(`${email} is not valid email`)
    expect(success).toBeFalsy()
  })
})
