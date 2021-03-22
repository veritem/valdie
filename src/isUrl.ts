//TODO: add function to validate for urls

import ErrorMessage from './utils/Error'

const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
const regex = new RegExp(expression)

//returns the url
export function isURL(url_str: String) {
  if (!url_str.match(regex)) ErrorMessage(url_str, 'email')
  return true
}
