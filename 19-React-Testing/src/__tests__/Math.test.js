import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const input = [1, 2]
  const expected = 3

  // Act
  const got = Add(input[0], input[1])

  // Assert
  expect(got).toBe(expected)

})

test('Return substraction of a - b', () => {
  // Arrange
  const input = [2, 1]
  const expected = 1

  // Act
  const got = Substract(input[0], input[1])

  // Assert
  expect(got).toBe(expected)

})

test('Return multiplication of two arguments', () => {
  // Arrange
  const input = [3, 5]
  const expected = 15

  // Act
  const got = Multiplication(input[0], input[1])

  // Assert
  expect(got).toBe(expected)

})