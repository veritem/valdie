import { areObjectsFromSameType } from '../src/index'

describe('is object of the same type', () => {
  it('check for same object types validity', () => {
    expect(areObjectsFromSameType({}, {}).success).toBeTruthy()
    expect(
      areObjectsFromSameType({ foo: 'bar' }, { foo: 'bar' }).success
    ).toBeTruthy()
  })

  it('check for diferent object types validity', () => {
    expect(areObjectsFromSameType({}, { a: 2 }).success).toBeFalsy()
    expect(
      areObjectsFromSameType({ foo: 'bar', names: 'john doe' }, { foo: 'bar' })
        .success
    ).toBeFalsy()
  })
})
