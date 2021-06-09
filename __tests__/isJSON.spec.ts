import { isJSON } from '../src/index'

describe('isJSON', () => {
  it('check for json character validity', () => {
    expect(isJSON('[2,3,4]')).toBeTruthy()
    expect(isJSON({})).toBeTruthy()
    expect(isJSON({ foo: 'bar' })).toBeTruthy()
    expect(isJSON([2, 4, 'foo'])).toBeTruthy()
  })
  it('check if json validator fails', () => {
    expect(() => isJSON('mmmm5487u#')).toThrow(
      new Error('mmmm5487u# is not a valid json')
    )
  })

  it('check if json validator fails', () => {
    expect(() => isJSON('13345')).toThrow(
      new Error('13345 is not a valid json')
    )
  })
  it('check if json validator fails', () => {
    expect(() => isJSON('{"name":"john","age":222,fName:"doe"}')).toThrow(Error)
  })
})
