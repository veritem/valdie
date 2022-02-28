import { describe, expect, it } from "vitest"
import { isTel } from '../src'

describe('Test for telephone validity', () => {
  it('Should pass for valid telephones', () => {
    const { message, success } = isTel('0780449389')
    expect(message).toBeUndefined()
    expect(success).toBeTruthy()
  })

  it('should fail for invalid phones', () => {
    const { message, success } = isTel('msmk')
    expect(message).toEqual(`msmk is not a valid telephone`)
    expect(success).toBeFalsy()
  })
})
