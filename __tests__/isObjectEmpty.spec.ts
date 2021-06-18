import { isObjectEmpty } from '../src/index'

describe('isObjectEmpty', () => {
  it('check for object emptyness validity', () => {
    expect(isObjectEmpty({})).toBeTruthy()
    expect(isObjectEmpty({ foo: 'bar' })).toBeFalsy()
  })
})
