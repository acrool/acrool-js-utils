import {
    anyToNumber,
    rgbToHex,
    hexToRGB,
    anyToBoolean,
} from '../convert';

test('rgbToHex', () => {
    expect(rgbToHex('rgb(0,0,0)')).toBe('#000000');
    expect(rgbToHex('RGB(255,255,255)')).toBe('#ffffff');
    expect(rgbToHex('RG255,255,0')).toBeUndefined();
});

test('hexToRGB', () => {
    expect(hexToRGB('#000000', .7)).toBe('rgba(0,0,0,.7)');
    expect(hexToRGB('#ffffff')).toBe('rgb(255,255,255)');
    expect(hexToRGB('#12312312')).toBeUndefined();
});


test('anyToNumber', () => {
    expect(anyToNumber(7)).toBe(7);
    expect(anyToNumber('07')).toBe(7);
    expect(anyToNumber('test')).toBe(0);
    expect(anyToNumber(true)).toBe(0);
});


test('anyToBoolean', () => {
    expect(anyToBoolean(7)).toBeUndefined();
    expect(anyToBoolean('07', true)).toBeFalsy();
    expect(anyToBoolean('0')).toBeFalsy();
    expect(anyToBoolean('false')).toBeFalsy();
    expect(anyToBoolean('true')).toBeTruthy();
    expect(anyToBoolean(1)).toBeTruthy();
    expect(anyToBoolean(true)).toBeTruthy();
});

