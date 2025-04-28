import {intersectionMin, formatCurrency, safeFormatDecimal} from './number';



describe('safeFormatDecimal', () => {
    it('should handle basic integers and decimals correctly', () => {
        expect(safeFormatDecimal(1234.5678, 2)).toBe('1234.56');
        expect(safeFormatDecimal(1234.5, 2)).toBe('1234.50');
        expect(safeFormatDecimal(0, 2)).toBe('0.00');
        expect(safeFormatDecimal(-1234.5678, 2)).toBe('-1234.56');
    });

    it('should handle no decimal places', () => {
        expect(safeFormatDecimal(1234.5678, 0)).toBe('1234');
        expect(safeFormatDecimal(-1234.5678, 0)).toBe('-1234');
    });

    it('should handle more decimal places', () => {
        expect(safeFormatDecimal(1.23456789, 5)).toBe('1.23456');
        expect(safeFormatDecimal(0.999999, 3)).toBe('0.999');
    });

    it('should handle Taiwanese Dollar (TWD) style amounts', () => {
        expect(safeFormatDecimal(500, 0)).toBe('500');
        expect(safeFormatDecimal(1234567, 0)).toBe('1234567');
    });

    it('should handle USD and international currency formats', () => {
        expect(safeFormatDecimal(1234.567, 2)).toBe('1234.56');
        expect(safeFormatDecimal(0.1 + 0.2, 2)).toBe('0.30'); // float precision test
    });

    it('should handle cryptocurrency precision (up to 18 decimals)', () => {
        expect(safeFormatDecimal('0.000000000000000001', 18)).toBe('0.000000000000000001');
        expect(safeFormatDecimal('1234567890123456789', 0)).toBe('1234567890123456789');
        expect(safeFormatDecimal('0.123456789123456789', 18)).toBe('0.123456789123456789');
    });

    it('should handle invalid inputs gracefully', () => {
        expect(safeFormatDecimal('abc', 2)).toBe('0.00');
        expect(safeFormatDecimal(undefined, 2)).toBe('0.00');
        expect(safeFormatDecimal(null as any, 2)).toBe('0.00');
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

