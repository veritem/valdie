import ErrorMessage from '../utils/Error';
import PasswordScore from '../utils/PasswordScore';
import { PASSWORDS, PASSWORD_SCORE } from '../enums/EPasswords'


/**
 * Validates a given str to a given PASSWORD strength
 * @param str Password to check
 * @param type Password Strength Variation
 * @returns 
 */
export function isPassword(str: string, type: PASSWORDS=PASSWORDS.MEDIUM): boolean {

  switch (type) {
    case PASSWORDS.TOO_WEAK:
      if (PasswordScore(str) <= PASSWORD_SCORE[0])
        ErrorMessage(str, `${type.toString()} password`)
      break;

    case PASSWORDS.WEAK:
      if (PasswordScore(str) <= PASSWORD_SCORE[1])
        ErrorMessage(str, `${type.toString()} password`)
      break;
  
    case PASSWORDS.MEDIUM:
      if (PasswordScore(str) <= PASSWORD_SCORE[2])
        ErrorMessage(str, `${type.toString()} password`)
      break;

    case PASSWORDS.STRONG:
      if (PasswordScore(str) <= PASSWORD_SCORE[3])
        ErrorMessage(str, `${type.toString()} password`)
      break;
    
        
    case PASSWORDS.VERY_STRONG:
      if (PasswordScore(str) <= PASSWORD_SCORE[4])
        ErrorMessage(str, `${type.toString()} password`)
        break;
    
  
    default:
      break;
  }
  return true
}
