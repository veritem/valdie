import ErrorMessage from './utils/Error'

//TODO:  function to check if the passed string is a string
export default function isString(str: unknown):boolean {
  if (typeof str !== 'string') ErrorMessage(str, 'string')
  return true
}
