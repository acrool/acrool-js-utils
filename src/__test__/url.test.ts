import {decodeQueryString, encodeQueryString, getMainDomain, getProtocolDomain, getSubDomain} from '../uri';

test('encodeQueryString', () => {
    expect(encodeQueryString({keyword: 'jack', sex: 'F'})).toBe('?keyword=jack&sex=F');
    expect(encodeQueryString({})).toBe('');
});

test('decodeQueryString', () => {
    expect(decodeQueryString('?keyword=jack&sex=F')).toStrictEqual({keyword: 'jack', sex: 'F'});
    expect(decodeQueryString('keyword=jac-_%40k%26sex%3DF&sex=F')).toStrictEqual({keyword: 'jac-_@k', sex: 'F'});
    expect(decodeQueryString('keyword--F')).toBeUndefined();
});

test('getProtocolDomain', () => {
    expect(getProtocolDomain('http://www.google.com:8080/test?keyword=jack')).toBe('http://www.google.com');
    expect(getProtocolDomain('https://google.com/test?keyword=jack')).toBe('https://google.com');
});

test('getMainDomain', () => {
    expect(getMainDomain('http://www.google.com')).toBe('google.com');
    expect(getMainDomain('http://www.google.com:8080/about')).toBe('google.com');
    expect(getMainDomain('https://google.com')).toBe('google.com');
});

test('getSubDomain', () => {
    expect(getSubDomain('http://www.google.com')).toBe('www');
    expect(getSubDomain('http://www.google.com:8080/about')).toBe('www');
    expect(getSubDomain('https://google.com')).toBe('');
});
