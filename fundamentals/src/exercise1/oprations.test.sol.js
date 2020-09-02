const operations = require('./operations')
const {
  add,
  subtract,
  multiply,
  divide
} = operations


test('add operation adds two numbers', () => {
  const a = 10
  const b = 30
  const result = 40
  expect(add(a, b)).toEqual(result)
})

test('subtract operation subtracts two numbers', () => {
  const a = 10
  const b = 30
  const result = -20
  expect(subtract(a, b)).toEqual(result)
})

test('multiply operation multiplys two numbers', () => {
  const a = 10
  const b = 30
  const result = 300
  expect(multiply(a, b)).toEqual(result)
})

test('divide operation divides two numbers', () => {
  const a = 10
  const b = 5
  const result = 2
  expect(divide(a, b)).toEqual(result)

  // Note: You must wrap the code in a function, otherwise the
  // error will not be caught and the assertion will fail.
  expect(() => divide(a, 0)).toThrow()
})