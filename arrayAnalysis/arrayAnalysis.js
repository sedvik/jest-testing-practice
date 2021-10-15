function reducer (prevVal, currentVal) {
  return prevVal + currentVal
}

function getAverage (array) {
  return array.reduce(reducer, 0) / array.length
}

function analyze (array) {
  if (!Array.isArray(array) || array.some(isNaN)) {
    throw new Error('Must provide an array of numbers')
  } else if (array.length === 0) {
    throw new Error('Length of array must be greater than zero')
  }

  const result = {
    average: getAverage(array),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  }

  return result
}

export default analyze
