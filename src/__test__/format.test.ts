
import {toNumber} from '../format';

test('toNumber equal number', () => {
  // Arrange
  const x: string = '3';
  const y: boolean = false;

  // Act

  // Assert
  expect(toNumber(x)).toBe(3);
  expect(toNumber(y)).toBe(undefined);
});
