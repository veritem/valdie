import { PASSWORDS } from "../src/enums/EPasswords";
import { isPassword } from "../src/index";

describe('isPassword', () => {

    it('Checks if password is TOO_WEAK', () => {
        expect(() => isPassword('password', PASSWORDS.TOO_WEAK)).toThrow(new Error('password is not a valid TOO_WEAK password'))
        expect(() => isPassword('password', PASSWORDS.TOO_WEAK)).toThrow(new Error('password is not a valid TOO_WEAK password'))
    })

    it('Checks if password is WEAK', () => {
        expect(() => isPassword('password', PASSWORDS.WEAK)).toThrow(new Error('password is not a valid TOO_WEAK password'))
        expect(() => isPassword('password', PASSWORDS.WEAK)).toThrow(new Error('password is not a valid TOO_WEAK password'))
    })
    
    it('Checks if password is MEDIUM', () => {
        expect(() => isPassword('password', PASSWORDS.MEDIUM)).toThrow(new Error('password is not a valid TOO_WEAK password'))
        expect(() => isPassword('password', PASSWORDS.MEDIUM)).toThrow(new Error('password is not a valid TOO_WEAK password'))
    })
    
    it('Checks if password is STRONG', () => {
        expect(() => isPassword('password', PASSWORDS.STRONG)).toThrow(new Error('password is not a valid TOO_WEAK password'))
        expect(() => isPassword('password', PASSWORDS.STRONG)).toThrow(new Error('password is not a valid TOO_WEAK password'))
    })

    it('Checks if password is VERY_STRONG', () => {
        expect(() => isPassword('password', PASSWORDS.VERY_STRONG)).toThrow(new Error('password is not a valid TOO_WEAK password'))
        expect(() => isPassword('password', PASSWORDS.VERY_STRONG)).toThrow(new Error('password is not a valid TOO_WEAK password'))
    })
})