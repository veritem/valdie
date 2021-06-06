//TODO: add function to validate for urls

import ErrorMessage from '../utils/Error'

/* eslint-disable */
const regex = new RegExp(
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
)

//returns the url
export function isURL(url_str: string): boolean {
  if (!url_str.match(regex)) ErrorMessage(url_str, 'email')
  return true
}
