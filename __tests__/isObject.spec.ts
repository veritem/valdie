import { isObject } from '../src/index'

describe('isObject', () => {
  it('check for object validity', () => {
    expect(isObject('{"name":"john","age":22}')).toBeTruthy()
    expect(isObject('{"name":"john","age":222,fName:"doe"}')).toBeTruthy()
    expect(isObject({})).toBeTruthy()
    expect(isObject({ foo: 'bar' })).toBeTruthy()
  })

  it('check if object validator fails', () => {
    expect(() => isObject('mmmm5487u#')).toThrow(
      new Error('mmmm5487u# is not a valid object')
    )
  })

  it('check if object validator fails', () => {
    expect(() => isObject('13345')).toThrow(
      new Error('13345 is not a valid object')
    )
  })
  it('check if object validator fails', () => {
    expect(() => isObject(true)).toThrow(Error)
  })

  it('check if object validator fails', () => {
    expect(() => isObject([2, 4, 'foo'])).toThrow(
      new Error('2,4,foo is not a valid object')
    )
  })
})
