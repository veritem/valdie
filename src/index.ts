export { isEmail } from './lib/isEmail'
export { isInteger } from './lib/isInteger'
export { isObjectEmpty } from './lib/isObjectEmpty'
export { isString } from './lib/isString'
export { isTel } from './lib/isTel'
export { isURL } from './lib/isUrl'

import { TEL_REGEX, URL_REGEX } from './utils/constants'


class Validie {
    #validation_string: any
    message?: string
    success: boolean


    constructor(to_be_validated: unknown) {
        this.#validation_string = to_be_validated
        this.message = undefined
        this.success = false
    }

    isURL () {
        if (!this.#validation_string.match(URL_REGEX)) {
            this.#response("URL")
        }
        return this
    }

    isTel () {
        if (!this.#validation_string.match(TEL_REGEX)) {
            this.#response("telephone")
        }
        return this
    }
    isString () {
        if (typeof this.#validation_string !== 'string') {
            this.#response('string')
        }
        return this
    }

    #response (validator: string) {
        this.success = true
        this.message = `${this.#validation_string} is not a valid ${validator}`
    }
}

export default (value: unknown) => new Validie(value)
