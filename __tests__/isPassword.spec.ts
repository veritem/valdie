import { PASSWORDS } from '../src/enums/EPasswords'
import { isPassword } from '../src/index'

describe('isPassword', () => {
  it('Checks if password is TOO_WEAK', () => {
    expect(() => isPassword('ab', PASSWORDS.TOO_WEAK)).toBeTruthy()
    expect(() => isPassword('123', PASSWORDS.TOO_WEAK)).toThrow(
      new Error('123 is not a valid TOO_WEAK password')
    )
  })

  it('Checks if password is WEAK', () => {
    expect(() => isPassword('passwo', PASSWORDS.WEAK)).toBeTruthy()
    expect(() => isPassword('hello', PASSWORDS.WEAK)).toThrow(
      new Error('hello is not a valid WEAK password')
    )
  })

  it('Checks if password is MEDIUM', () => {
    expect(() => isPassword('12asswor3', PASSWORDS.MEDIUM)).toBeTruthy()
    expect(() => isPassword('1passwor', PASSWORDS.MEDIUM)).toThrow(
      new Error('1passwor is not a valid MEDIUM password')
    )
  })

  it('Checks if password is STRONG', () => {
    expect(() => isPassword('@Paword1', PASSWORDS.STRONG)).toBeTruthy()
    expect(() => isPassword('@paword4', PASSWORDS.STRONG)).toThrow(
      new Error('@paword4 is not a valid STRONG password')
    )
  })

  it('Checks if password is VERY_STRONG', () => {
    expect(() => isPassword('#Hidr4dra10$', PASSWORDS.VERY_STRONG)).toBeTruthy()
    expect(() => isPassword('password@123', PASSWORDS.VERY_STRONG)).toThrow(
      new Error('password@123 is not a valid VERY_STRONG password')
    )
  })
})
