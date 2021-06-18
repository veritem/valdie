import { areObjectsFromSameType } from '../src/index'

describe('isObjectEmpty', () => {
  it('check for same object types validity', () => {
    expect(areObjectsFromSameType({}, {})).toBeTruthy()
    expect(areObjectsFromSameType({ foo: 'bar' }, { foo: 'bar' })).toBeTruthy()
  })

  it('check for diferent object types validity', () => {
    expect(areObjectsFromSameType({}, { a: 2 })).toBeFalsy()
    expect(
      areObjectsFromSameType({ foo: 'bar', names: 'john doe' }, { foo: 'bar' })
    ).toBeFalsy()
  })
})
