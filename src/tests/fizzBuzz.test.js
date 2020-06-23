import { fizzBuzz } from '../fizzBuzz'

  describe('FizzBuzz', () => {
    it('Should throw an exception if the input is not a number', () => {
        const notANumber = ["", null, false, undefined, {}]
        notANumber.forEach(x => {
            expect(() => fizzBuzz(x)).toThrow()
        })
    })

    it("Should return FizzBuzz if the input is divisible by 3 and 5", () => {
        const result = fizzBuzz(15)
        expect(result).toBe('FizzBuzz')
    })

    it("Should return Fizz if the input is only divisible by 3", () => {
        const result = fizzBuzz(3)
        expect(result).toBe('Fizz')
    })

    it("Should return Buzz if the input is only divisible by 5", () => {
        const result = fizzBuzz(5)
        expect(result).toBe('Buzz')
    })

    it("Should return the input if it is not divisible by 3 or 5", () => {
        const result = fizzBuzz(1)
        expect(result).toBe(1)
    })
})