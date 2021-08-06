import { isObjectEmpty } from '../src'



describe("Test for object", () => {
    test('should pass for empty objects', () => {
        const { message, success } = isObjectEmpty({})
        expect(message).toBeUndefined()
        expect(success).toBeTruthy()
    })

    test('should fail if object is not empty', () => {
        const obj = { name: "veritem" }
        const { message, success } = isObjectEmpty(obj)

        expect(message).toEqual(`${Object} is not a valid object`)
        expect(success).toBeFalsy()
    })


})
