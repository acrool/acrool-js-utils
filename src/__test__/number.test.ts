import {intersectionMin, formatCurrency, numToDecimal2} from '../number';


test('numToDecimal2', () => {
    expect(String(numToDecimal2(2000))).toEqual('2000.00');
});


test('formatCurrency', () => {
    expect(formatCurrency(2000)).toBe('2,000');
    expect(formatCurrency(2000, true)).toBe('2,000.00');
    expect(formatCurrency(2000.21, true)).toBe('2,000.21');
});


test('intersectionMin', () => {
    expect(intersectionMin([
        [1,20], [5, 24]
    ])).toStrictEqual({min: 5, max: 20});
});
