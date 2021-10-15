function isValidNumInput (a, b) {
  return (typeof a === 'number' && typeof b === 'number')
}

const calculator = {
  add: function (a, b) {
    if (!isValidNumInput(a, b)) {
      throw new Error('Provided arguments must be numbers')
    }
    return a + b
  },

  subtract: function (a, b) {
    if (!isValidNumInput(a, b)) {
      throw new Error('Provided arguments must be numbers')
    }
    return a - b
  },

  multiply: function (a, b) {
    if (!isValidNumInput(a, b)) {
      throw new Error('Provided arguments must be numbers')
    }
    return a * b
  },

  divide: function (a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero')
    } else if (!isValidNumInput(a, b)) {
      throw new Error('Provided arguments must be numbers')
    }
    return a / b
  }
}

export default calculator
