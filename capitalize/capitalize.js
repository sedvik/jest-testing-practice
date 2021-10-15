function capitalize (str) {
  if (typeof str !== 'string') {
    throw new Error('This function accepts a single string argument')
  }

  const firstChar = str.charAt(0)
  const rest = str.slice(1)
  return firstChar.toUpperCase() + rest
}

export default capitalize
