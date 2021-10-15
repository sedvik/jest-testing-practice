function reverseString (str) {
  if (typeof str !== 'string') {
    throw new Error('Provided argument must be a string')
  }

  return str.split('').reverse().join('')
}

export default reverseString
