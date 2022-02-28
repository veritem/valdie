import { describe, expect, it } from "vitest"
import { isObject } from '../src/index'

describe('isObject', () => {
  it('check for object validity', () => {
    expect(isObject('{"name":"john","age":22}').success).toBeTruthy()
    expect(
      isObject('{"name":"john","age":222,fName:"doe"}').success
    ).toBeTruthy()
    expect(isObject({}).success).toBeTruthy()
    expect(isObject({ foo: 'bar' }).success).toBeTruthy()
  })

  it('check if object validator fails', () => {
    expect(isObject('mmmm5487u#').success).toBeFalsy()
  })

  it('check if object validator fails', () => {
    expect(isObject('13345').success).toBeFalsy()
  })
  it('check if object validator fails', () => {
    expect(isObject(true).success).toBeFalsy()
  })
  it('check if object validator fails', () => {
    expect(isObject([2, 4, 'foo']).success).toBeFalsy()
  })
})
