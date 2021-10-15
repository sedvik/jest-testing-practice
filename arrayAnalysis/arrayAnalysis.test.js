import { test, expect } from '@jest/globals'
import analyze from './arrayAnalysis.js'

test('Returns a correct result object for an array of one integer', () => {
  const arr = [5]
  const expectedResult = {
    average: 5,
    min: 5,
    max: 5,
    length: 1
  }

  const result = analyze(arr)

  expect(result).toEqual(expectedResult)
})

test('Returns a correct result object for an array of several integers', () => {
  const arr = [5, 7, 30, 22]
  const expectedResult = {
    average: 16,
    min: 5,
    max: 30,
    length: 4
  }

  const result = analyze(arr)

  expect(result).toEqual(expectedResult)
})

test('Returns a correct result object for an array of floating point numbers', () => {
  const arr = [1.3, 2.17, 14.5, 9.3, 7.2]
  const expectedResult = {
    average: 6.894,
    min: 1.3,
    max: 14.5,
    length: 5
  }

  const result = analyze(arr)

  expect(result.average).toBeCloseTo(expectedResult.average)
  expect(result.min).toBeCloseTo(expectedResult.min)
  expect(result.max).toBeCloseTo(expectedResult.max)
  expect(result.length).toBeCloseTo(expectedResult.length)
})

test('Returns a correct result object for an array that contains negative numbers', () => {
  const arr = [2, 4, -2, -4]
  const expectedResult = {
    average: 0,
    min: -4,
    max: 4,
    length: 4
  }

  const result = analyze(arr)

  expect(result).toEqual(expectedResult)
})

test('Throws an error if a non-array argument is received', () => {
  const arr = 3

  expect(() => analyze(arr)).toThrow('Must provide an array of numbers')
})

test('Throws an error if the array contains any non-numbers', () => {
  const arr = [1, 'b', 3]

  expect(() => analyze(arr)).toThrow('Must provide an array of numbers')
})

test('Throws an error if an empty array is provided', () => {
  const arr = []

  expect(() => analyze(arr)).toThrow('Length of array must be greater than zero')
})
