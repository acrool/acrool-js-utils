
import {
  toNumber,
  toCapitalize,
  upperLineToLowerCase,
  lowerLocaleToISOCode,
  lowerCaseToUpLineCase,
  rgbToHex,
  hexToRGB,
  paddingLeft,
  autoMapper,
  reverseObj,
  jsonDecode, arrayJoin, stringSplit, objFilterNotTrue2Array, arrayFilterSameValue, toBoolean
} from '../format';

test('toCapitalize', () => {
  expect(toCapitalize('helloWorld')).toBe('HelloWorld');
});

test('upperLineToLowerCase', () => {
  expect(upperLineToLowerCase('Hello_World')).toBe('helloWorld');
});

test('lowerLocaleToISOCode', () => {
  expect(lowerLocaleToISOCode('en-us')).toBe('en-US');
});

test('lowerCaseToUpLineCase', () => {
  expect(lowerCaseToUpLineCase('helloWorld')).toBe('HELLO_WORLD');
});

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


test('paddingLeft', () => {
  expect(paddingLeft('20', 4)).toBe('0020');
});


test('autoMapper', () => {
  expect(autoMapper({name: 'jack'}, {name: 'id'})).toStrictEqual({id: 'jack'});
});


test('reverseObj', () => {
  expect(reverseObj({name: 'jack'})).toStrictEqual({jack: 'name'});
});


test('jsonDecode', () => {
  const jsonObj = {name: 'jack'};
  const jsonString = JSON.stringify({name: 'jack'});
  const jsonErrorString = "{name:_'jack'}";
  expect(jsonDecode(jsonString)).toStrictEqual(jsonObj);
  expect(jsonDecode(jsonErrorString)).toBeUndefined();
});


test('arrayJoin', () => {
  const anyString: any = 'uploads.profile';
  expect(arrayJoin(['uploads','profile'], '/')).toBe('uploads/profile');
  expect(arrayJoin(anyString, '/')).toBe('');
});

test('stringSplit', () => {
  const anyString: any = false;
  expect(stringSplit('s-m-x', '-')).toStrictEqual(['s','m','x']);
  expect(stringSplit(anyString, '-')).toStrictEqual([]);
});


test('objFilterNotTrue2Array', () => {
  expect(objFilterNotTrue2Array({_1: true, _2: false, _3: true})).toStrictEqual([1, 3]);
});


test('arrayFilterSameValue', () => {
  expect(arrayFilterSameValue([1, 2, 2, 3, 3])).toStrictEqual([1, 2, 3]);
});

test('toNumber', () => {
  expect(toNumber(7)).toBe(7);
  expect(toNumber('07')).toBe(7);
  expect(toNumber('test')).toBe(0);
  expect(toNumber(true)).toBe(0);
});


test('toBoolean', () => {
  expect(toBoolean(7)).toBeUndefined();
  expect(toBoolean('07', true)).toBeFalsy();
  expect(toBoolean('0')).toBeFalsy();
  expect(toBoolean('false')).toBeFalsy();
  expect(toBoolean('true')).toBeTruthy();
  expect(toBoolean(1)).toBeTruthy();
  expect(toBoolean(true)).toBeTruthy();
});
