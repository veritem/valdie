import ErrorMessage from "./utils/Error"

/* eslint-disable no-useless-escape */
export function isObjectEmpty(value: any[]): boolean {
    if(!(Object.keys(value).length === 0)) ErrorMessage(value,"object")
    return true
  }
  