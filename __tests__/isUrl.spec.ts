import { describe, expect, test } from "vitest"
import { isURL } from '../src'

describe('Test case for url validations', () => {
  test('should pass for valid urls', () => {
    const { message, success } = isURL(
      'https://www.youtube.com/watch?v=0IORSWpGcMU'
    )
    expect(message).toBeUndefined()
    expect(success).toBeTruthy()
  })

  test('should fail for invalid urls', () => {
    const { message, success } = isURL('kdkdkkdkdk')
    expect(message).toEqual(`kdkdkkdkdk is not a valid url`)
    expect(success).toBeFalsy()
  })
})
