import { expect, test } from '@jest/globals'
import reverseString from './reverseString'

test('Reverses a string', () => {
  const string = 'mainland'
  const expectedResult = 'dnalniam'

  const result = reverseString(string)

  expect(result).toBe(expectedResult)
})

test('Maintains capitalization of reversed characters', () => {
  const string = 'Cat'
  const expectedResult = 'taC'

  const result = reverseString(string)

  expect(result).toBe(expectedResult)
})

test('Reverses strings with spaces in them', () => {
  const string = 'How now, brown cow?'
  const expectedResult = '?woc nworb ,won woH'

  const result = reverseString(string)

  expect(result).toBe(expectedResult)
})

test('Empty string inputs return empty strings', () => {
  const string = ''
  const expectedResult = ''

  const result = reverseString(string)

  expect(result).toBe(expectedResult)
})

test('Throws an error if non-string arguments are given', () => {
  const string = 175

  expect(() => reverseString(string)).toThrow('Provided argument must be a string')
})
