import {intersectionMin, formatCurrency, safeFormatDecimal} from './number';



describe('safeFormatDecimal', () => {
    it('should return a decimal2 number for number', () => {
        expect(String(safeFormatDecimal(2000,2 ))).toEqual('2000.00');
        expect(String(safeFormatDecimal(2000.100, 2))).toEqual('2000.10');
        expect(String(safeFormatDecimal(2033.88, 3))).toEqual('2033.880');
        expect(String(safeFormatDecimal(0.20, 3))).toEqual('0.200');
        expect(String(safeFormatDecimal(33.87, 3))).toEqual('33.870');
        expect(String(safeFormatDecimal(33.88, 3))).toEqual('33.880');
        expect(String(safeFormatDecimal(33.847, 3))).toEqual('33.847');
        expect(String(safeFormatDecimal(33.853,3))).toEqual('33.853');
    });

    it('should handle different decimal places', () => {
        expect(String(safeFormatDecimal(123.456, 0))).toEqual('123');
        expect(String(safeFormatDecimal(123.456, 1))).toEqual('123.4');
        expect(String(safeFormatDecimal(123.456, 4))).toEqual('123.4560');
        expect(String(safeFormatDecimal(123.456789, 5))).toEqual('123.45678');
    });

    it('should handle edge cases and special numbers', () => {
        expect(String(safeFormatDecimal(0, 2))).toEqual('0.00');
        expect(String(safeFormatDecimal(-123.456, 2))).toEqual('-123.45');
        expect(String(safeFormatDecimal(9999999.999, 2))).toEqual('9999999.99');
        expect(String(safeFormatDecimal(0.0001, 4))).toEqual('0.0001');
    });

    it('should handle string input values', () => {
        expect(String(safeFormatDecimal('123.456', 2))).toEqual('123.45');
        expect(String(safeFormatDecimal('0.123', 3))).toEqual('0.123');
        expect(String(safeFormatDecimal('invalid', 2))).toEqual('0.00');
        expect(String(safeFormatDecimal('', 2))).toEqual('0.00');
        expect(String(safeFormatDecimal(0.2 + 0.1, 2))).toEqual('0.30');
    });
});


describe('formatCurrency', () => {
    it('should return a format Currency number for number', () => {
        expect(formatCurrency(2000)).toBe('2,000');
    });
    it('should return a format Currency number && numToDecimal2 for number (isDecimal: true)', () => {
        expect(formatCurrency(2000, 2)).toBe('2,000.00');
        expect(formatCurrency(2000.21, 2)).toBe('2,000.21');
        expect(formatCurrency(2000.20, 2)).toBe('2,000.20');
        expect(formatCurrency(2000.2, 2)).toBe('2,000.20');
        expect(formatCurrency(2033.88, 2)).toEqual('2,033.88');
        expect(formatCurrency(2033.847, 2)).toEqual('2,033.84');
        expect(formatCurrency(2033.847126, 5)).toEqual('2,033.84712');
    });
});


describe('intersectionMin', () => {
    it('should return a min and max number for number array', () => {
        expect(intersectionMin([
            [1,20], [5, 24]
        ])).toStrictEqual({min: 5, max: 20});
    });
});

