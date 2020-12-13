import { isEmail } from '../src/index'

test('check for email validity', () => {
  expect(isEmail('email@example.com')).toBeTruthy()
  expect(isEmail('_______@example.com')).toBeTruthy()
  expect(isEmail('email@example.com')).toBeTruthy()
})
