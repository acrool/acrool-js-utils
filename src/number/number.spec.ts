import {intersectionMin, formatCurrency, numToDecimal2} from './number';



describe('numToDecimal2', () => {
    it('should return a decimal2 number for number', () => {
        expect(String(numToDecimal2(2000))).toEqual('2000.00');
        expect(String(numToDecimal2(2000.100))).toEqual('2000.10');
        expect(String(numToDecimal2(0.20))).toEqual('0.20');
    });
});


describe('formatCurrency', () => {
    it('should return a format Currency number for number', () => {
        expect(formatCurrency(2000)).toBe('2,000');
    });
    it('should return a format Currency number && numToDecimal2 for number (isDecimal: true)', () => {
        expect(formatCurrency(2000, true)).toBe('2,000.00');
        expect(formatCurrency(2000.21, true)).toBe('2,000.21');
        expect(formatCurrency(2000.20, true)).toBe('2,000.20');
        expect(formatCurrency(2000.2, true)).toBe('2,000.20');
    });
});


describe('intersectionMin', () => {
    it('should return a min and max number for number array', () => {
        expect(intersectionMin([
            [1,20], [5, 24]
        ])).toStrictEqual({min: 5, max: 20});
    });
});

