import { isJSON } from '../src/index'

describe('isJSON', () => {
  it('check for json character validity', () => {
    expect(isJSON('[2,3,4]').success).toBeTruthy()
    expect(isJSON({}).success).toBeTruthy()
    expect(isJSON({ foo: 'bar' }).success).toBeTruthy()
    expect(isJSON([2, 4, 'foo']).success).toBeTruthy()
  })
  it('check if json validator fails', () => {
    expect(isJSON('mmmm5487u#').success).toBeFalsy()
  })

  it('check if json validator fails', () => {
    expect(isJSON('13345').success).toBeFalsy()
  })
  it('check if json validator fails', () => {
    expect(isJSON('{"name":"john","age":222,fName:"doe"}').success).toBeFalsy()
  })
})
