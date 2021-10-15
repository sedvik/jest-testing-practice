import { test, expect } from '@jest/globals'
import caesarCipher from './caesarCipher.js'

test('Translates "cat" with a shift of 4 to "gex"', () => {
  const string = 'cat'
  const shift = 4
  const expectedResult = 'gex'

  const result = caesarCipher(string, shift)

  expect(result).toBe(expectedResult)
})

test('Wraps characters back around to beginning of alphabet if they exceed z (25)', () => {
  const string = 'cat'
  const shift = 8
  // The 't' in cat should become 'b' after shifting forward 8
  const expectedResult = 'kib'

  const result = caesarCipher(string, shift)

  expect(result).toBe(expectedResult)
})

test('Translates "javascript" with a shift of 14 to "xojogqfwdh"', () => {
  const string = 'javascript'
  const shift = 14
  const expectedResult = 'xojogqfwdh'

  const result = caesarCipher(string, shift)

  expect(result).toBe(expectedResult)
})

test('Returns an empty string when an empty string is provided', () => {
  const string = ''
  const shift = 17
  const expectedResult = ''

  const result = caesarCipher(string, shift)

  expect(result).toBe(expectedResult)
})

test('Does not shift/alter special characters such as punctuation or symbols', () => {
  const string = 'j@vascript!'
  const shift = 11
  const expectedResult = 'u@gldnctae!'

  const result = caesarCipher(string, shift)

  expect(result).toBe(expectedResult)
})

test('Letter case should not be altered after being encoded', () => {
  const string = 'Dog'
  const shift = 7
  const expectedResult = 'Kvn'

  const result = caesarCipher(string, shift)

  expect(result).toBe(expectedResult)
})
