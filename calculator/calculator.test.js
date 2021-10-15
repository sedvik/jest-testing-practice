import { describe, expect, test } from '@jest/globals'
import calculator from './calculator.js'

/*
 * Add
 */

describe('add', () => {
  test('Adds two integers together', () => {
    const a = 2
    const b = 3
    const expectedResult = 5

    const result = calculator.add(a, b)

    expect(result).toBe(expectedResult)
  })

  test('Adds negative integers together', () => {
    const a = -17
    const b = -14
    const expectedResult = -31

    const result = calculator.add(a, b)

    expect(result).toBe(expectedResult)
  })

  test('Adds floating point numbers together', () => {
    const a = 13.3
    const b = 2.4
    const expectedResult = 15.7

    const result = calculator.add(a, b)

    expect(result).toBeCloseTo(expectedResult)
  })

  test('Throws an error when "a" receives a non-number argument type', () => {
    const a = 'Hamburger'
    const b = 5

    expect(() => calculator.add(a, b)).toThrow('Provided arguments must be numbers')
  })

  test('Throws an error when "b" receives a non-number argument type', () => {
    const a = 10
    const b = 'Jest kidding'

    expect(() => calculator.add(a, b)).toThrow('Provided arguments must be numbers')
  })
})

/*
 * Subtract
 */

describe('subtract', () => {
  test('Subtracts b from a', () => {
    const a = 10
    const b = 3
    const expectedResult = 7

    const result = calculator.subtract(a, b)

    expect(result).toBe(expectedResult)
  })

  test('Works for negative b values', () => {
    const a = 5
    const b = -14
    const expectedResult = 19

    const result = calculator.subtract(a, b)

    expect(result).toBe(expectedResult)
  })

  test('Works for floating point numbers', () => {
    const a = 1.1
    const b = 17.3
    const expectedResult = -16.2

    const result = calculator.subtract(a, b)

    expect(result).toBeCloseTo(expectedResult)
  })

  test('Throws an error when "a" receives a non-number argument type', () => {
    const a = []
    const b = 3

    expect(() => calculator.subtract(a, b)).toThrow('Provided arguments must be numbers')
  })

  test('Throws an error when "b" receives a non-number argument type', () => {
    const a = 10
    const b = {}

    expect(() => calculator.subtract(a, b)).toThrow('Provided arguments must be numbers')
  })
})

/*
 * Multiply
 */

describe('multiply', () => {
  test('Multiplies two integers together', () => {
    const a = 3
    const b = 2
    const expectedResult = 6

    const result = calculator.multiply(a, b)

    expect(result).toBe(expectedResult)
  })

  test('Works for floating point numbers', () => {
    const a = 3.2
    const b = 2
    const expectedResult = 6.4

    const result = calculator.multiply(a, b)

    expect(result).toBeCloseTo(expectedResult)
  })

  test('Result in 0 when a provided argument is 0', () => {
    const a = 0
    const b = 100000
    const expectedResult = 0

    const result = calculator.multiply(a, b)

    expect(result).toBe(expectedResult)
  })

  test('Throws an error when "a" receives a non-number argument type', () => {
    const a = function () {}
    const b = 1

    expect(() => calculator.multiply(a, b)).toThrow('Provided arguments must be numbers')
  })

  test('Throws an error when "b" receives a non-number argument type', () => {
    const a = 2
    const b = [3]

    expect(() => calculator.multiply(a, b)).toThrow('Provided arguments must be numbers')
  })
})

/*
 * Divide
 */

describe('divide', () => {
  test('Divides a by b', () => {
    const a = 10
    const b = 2
    const expectedResult = 5

    const result = calculator.divide(a, b)

    expect(result).toBe(expectedResult)
  })

  test('Works for floating point numbers', () => {
    const a = 13.2
    const b = 3
    const expectedResult = 4.4

    const result = calculator.divide(a, b)

    expect(result).toBeCloseTo(expectedResult)
  })

  test('Allows zero to be divided by any number', () => {
    const a = 0
    const b = 14
    const expectedResult = 0

    const result = calculator.divide(a, b)

    expect(result).toBe(expectedResult)
  })

  test('Throws an error when attempting to divide by 0', () => {
    const a = 3
    const b = 0

    expect(() => calculator.divide(a, b)).toThrow('Cannot divide by zero')
  })

  test('Throws an error when "a" receives a non-number argument type', () => {
    const a = 'str'
    const b = 1

    expect(() => calculator.divide(a, b)).toThrow('Provided arguments must be numbers')
  })

  test('Throws an error when "b" receives a non-number argument type', () => {
    const a = 2
    const b = { b: 15 }

    expect(() => calculator.divide(a, b)).toThrow('Provided arguments must be numbers')
  })
})
