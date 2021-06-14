import ErrorMessage from '../utils/Error'
import { PASSWORDS, PASSWORD_SCORE } from '../enums/EPasswords'

const score = (str: string): number => {
  let score = 0
  if (!str) {
    return score
  }

  const letters: any = new Object()
  for (let i = 0; i < str.length; i++) {
    letters[str[i]] = (letters[str[i]] || 0) + 1
    score += 5.0 / letters[str[i]]
  }

  const variations: any = {
    digits: /\d/.test(str),
    lower: /[a-z]/.test(str),
    upper: /[A-Z]/.test(str),
    nonWords: /\W/.test(str)
  }

  let variationCount = 0

  for (const check in variations) {
    if (check !== undefined) {
      variationCount += variations[check] === true ? 1 : 0
    }
  }
  score += (variationCount - 1) * 10

  return score
}

export function isPassword(str: string, strength: PASSWORDS): boolean {
  if (strength == PASSWORDS.TOO_WEAK) {
    if (score(str) >= PASSWORD_SCORE[0])
      ErrorMessage(str, `${strength.toString()} password`)
  }
  return true;
}
