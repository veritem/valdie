import ErrorMessage from 'src/utils/Error'

//TODO: add functions to check the validity of an email
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default function isEmail(str: string): boolean {
  if (!emailRegex.test(str)) ErrorMessage(str, 'email')
  return true
}
