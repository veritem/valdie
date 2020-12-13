import { isEmail } from '../src/index'

test('check for email validity', () => {
  expect(isEmail('email@example.com')).toBeTruthy()
  expect(isEmail('_______@example.com')).toBeTruthy()
  expect(isEmail('email@example.com')).toBeTruthy()
})

//TODO: test a function that return an error exception
test('check if email validator fails', () => {
  expect(() => isEmail('”more unusual”@example.com')).toThrow(TypeError)
})
