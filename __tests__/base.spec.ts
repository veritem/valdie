import { isEmail } from '../src/index'

test('check for email validity', () => {
  expect(isEmail('email@example.com')).toBeTruthy()
})
