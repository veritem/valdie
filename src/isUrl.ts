//TODO: add function to validate for urls

import ErrorMessage from './utils/Error'

/* eslint-disable */
const regex = new RegExp(
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
)

//returns the url
export function isURL(value: string): boolean {
  if (!value.match(regex)) ErrorMessage(value, 'email')
  return true
}
