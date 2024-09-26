import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const a = 13;
  const b = 3;
  const expected = 16;
  // Act
  const hasil = Add(a, b);
  
  // Assert
  expect(hasil).toBe(expected)
})

test('Return substraction of a - b', () => {
  // Arrange
  const x = 13;
  const y = 3;
  const expected = 10;

  // Act
  const hasil = Substract(x, y)

  // Assert
  expect(hasil).toBe(expected)
})

test('Return multiplication of two arguments', () => {
  // Arrange
  const x = 13;
  const y = 3;
  const expected = 39;

  // Act
  const hasil = Multiplication(x, y)

  // Assert
  expect(hasil).toBe(expected)
})