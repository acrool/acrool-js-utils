import {anyToNumber, rgbToHex, hexToRGB, anyToBoolean, emptyToNull} from './convert';

describe('rgbToHex', () => {
    it('should return a hex string for rgb(0,0,0)', () => {
        expect(rgbToHex('rgb(0,0,0)')).toBe('#000000');
    });
    it('should return a hex string for RGB(255,255,255)', () => {
        expect(rgbToHex('RGB(255,255,255)')).toBe('#ffffff');
    });
    it('should return a undefined for RG255,255,0', () => {
        expect(rgbToHex('RG255,255,0')).toBeUndefined();
    });
});


describe('hexToRGB', () => {
    it('should return a rgba string for #000000 .7', () => {
        expect(hexToRGB('#000000', .7)).toBe('rgba(0,0,0,.7)');
    });
    it('should return a rgb string for #ffffff', () => {
        expect(hexToRGB('#ffffff')).toBe('rgb(255,255,255)');
    });
    it('should return a undefined for fail hex string', () => {
        expect(hexToRGB('#12312312')).toBeUndefined();
    });
});


describe('emptyToNull', () => {
    it('should return a number for number', () => {
        expect(emptyToNull(7)).toBe(7);
    });
    it('should return a string string for string', () => {
        expect(emptyToNull('07')).toBe('07');
        expect(emptyToNull('0')).toBe('0');
    });
    it('should return a null for empty string', () => {
        expect(emptyToNull('')).toBe(null);
    });
    it('should return a null for zero', () => {
        expect(emptyToNull(0)).toBe(null);
    });
    it('should return a null for undefined', () => {
        expect(emptyToNull(undefined)).toBe(null);
    });
});


describe('anyToNumber', () => {
    it('should return a number for number', () => {
        expect(anyToNumber(7)).toBe(7);
    });
    it('should return a number string for string', () => {
        expect(anyToNumber('07')).toBe(7);
        expect(anyToNumber('test')).toBe(0);
    });
    it('should return a number for boolean', () => {
        expect(anyToNumber(true)).toBe(1);
        expect(anyToNumber(false)).toBe(0);
    });
});

describe('anyToBoolean', () => {
    it('should return a undefined for number', () => {
        expect(anyToBoolean(7)).toBeUndefined();
    });
    it('should return a false string for string and not boolean return true', () => {
        expect(anyToBoolean('07', true)).toBeFalsy();
    });
    it('should return a false for string', () => {
        expect(anyToBoolean('0')).toBeFalsy();
        expect(anyToBoolean('1')).toBeFalsy();
    });
    it('should return a false for string boolean', () => {
        expect(anyToBoolean('false')).toBeFalsy();
        expect(anyToBoolean('true')).toBeTruthy();
    });
    it('should return a number for boolean', () => {
        expect(anyToBoolean(0)).toBeFalsy();
        expect(anyToBoolean(1)).toBeTruthy();
    });
    it('should return a boolean for boolean', () => {
        expect(anyToBoolean(true)).toBeTruthy();
        expect(anyToBoolean(false)).toBeFalsy();
    });
});

