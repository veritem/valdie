import { isURL } from '../src'

describe('Test case for url validations', () => {
  test('should pass url', () => {
    expect(isURL('https://www.youtube.com/watch?v=0IORSWpGcMU')).toBeTruthy()
  })
})
