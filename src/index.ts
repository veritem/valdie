export { areObjectsFromSameType } from './lib/areObjectsFromSameType'
export { isAccepted } from './lib/isAccepted'
export { isAlpha } from './lib/isAlpha'
export { isAlphaChar } from './lib/isAlphaChar'
export { isAlphaNum } from './lib/isAlphaNum'
export { isArray } from './lib/isArray'
export { isBoolean } from './lib/isBoolean'
export { isEmail } from './lib/isEmail'
export { isInteger } from './lib/isInteger'
export { isJSON } from './lib/isJSON'
export { isObject } from './lib/isObject'
export { isObjectEmpty } from './lib/isObjectEmpty'
export { isString } from './lib/isString'
export { isTel } from './lib/isTel'
export { isURL } from './lib/isUrl'
export { isIPv4 } from './lib/isIPv4'
export type { Response } from './utils/response'

import { TEL_REGEX, URL_REGEX } from './utils/constants'
import { Response } from './utils/response'

class Validie {
  #validation_string: any
  message: string[] = []
  success = false

  constructor(to_be_validated: unknown) {
    this.#validation_string = to_be_validated
  }

  isURL() {
    if (!String(this.#validation_string).match(URL_REGEX)) {
      this.#response('URL')
    }
    return this
  }

  isTel() {
    if (!String(this.#validation_string).match(TEL_REGEX)) {
      this.#response('telephone')
    }
    return this
  }
  isString() {
    if (typeof this.#validation_string !== 'string') {
      this.#response('string')
    }
    return this
  }

  #response(validator: string) {
    this.success = true
    this.message.push(`${this.#validation_string} is not a valid ${validator}`)
  }

  validate(): Response {
    return { message: this.message, success: this.success }
  }
}

export default (value: unknown): Validie => new Validie(value)
