import {formatCurrency, intersectionMin, toDecimal2} from '../number';

test('formatCurrency', () => {
    expect(formatCurrency(2000)).toBe('2,000');
    expect(formatCurrency(2000, true)).toBe('2,000');
    expect(formatCurrency(2000.21, true)).toBe('2,000.21');
});

test('toDecimal2', () => {
    expect(toDecimal2(2000)).toBe(2000.00);
});

test('intersectionMin', () => {
    expect(intersectionMin([
        [1,20], [5, 24]
    ])).toStrictEqual({min: 5, max: 20});
});
