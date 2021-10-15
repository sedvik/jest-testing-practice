import { expect, test } from '@jest/globals'
import capitalize from './capitalize.js'

test('Capitalizes first letter of an uncapitalized string', () => {
  const string = 'cat'
  const expectedResult = 'Cat'

  const result = capitalize(string)

  expect(result).toBe(expectedResult)
})

test('Capitalized string remains capitalized', () => {
  const string = 'Dog'
  const expectedResult = 'Dog'

  const result = capitalize(string)

  expect(result).toBe(expectedResult)
})

test('Nothing happens to strings with a preceding number', () => {
  const string = '7UP'
  const expectedResult = '7UP'

  const result = capitalize(string)

  expect(result).toBe(expectedResult)
})

test('The first letter of a multi-word string is capitalized', () => {
  const string = 'fui al supermercado'
  const expectedResult = 'Fui al supermercado'

  const result = capitalize(string)

  expect(result).toBe(expectedResult)
})

test('Throws an error if a non-string is provided', () => {
  const string = ['s', 't', 'r', 'i', 'n', 'g']

  expect(() => capitalize(string)).toThrow('This function accepts a single string argument')
})
