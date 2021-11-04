import { ErrorMessage, Response, SuccessMesage } from '../utils/response'

/* eslint-disable */
const regex = new RegExp(
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
)

//returns the url
export  function isURL (url_str: string): Response {
  if (!url_str.match(regex))
    return ErrorMessage(`${url_str} is not a valid url`)
  return SuccessMesage()
}
