import {decodeQueryString, encodeQueryString, getMainDomain, getProtocolDomain, getSubDomain, urlJoin} from '../uri';

test('encodeQueryString', () => {
    expect(encodeQueryString({keyword: '블랙프라이데이 (BlackFriday)', sex: 'F'})).toBe('keyword=%EB%B8%94%EB%9E%99%ED%94%84%EB%9D%BC%EC%9D%B4%EB%8D%B0%EC%9D%B4%20(BlackFriday)&sex=F');
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


test('urlJoin', () => {
    expect(urlJoin('http://www.google.com/', 'foo/bar', '?test=123')).toBe('http://www.google.com/foo/bar?test=123');
    expect(urlJoin(['http://www.google.com/', 'foo/bar', '?test=123'])).toBe('http://www.google.com/foo/bar?test=123');
    expect(urlJoin(['http://www.google.com', '#!', 'foo/bar', '?test=123'])).toBe('http://www.google.com/#!/foo/bar?test=123');
    expect(urlJoin('http:', 'www.google.com/', 'foo/bar', '?test=123')).toBe('http://www.google.com/foo/bar?test=123');
    expect(urlJoin('http://', 'www.google.com/', 'foo/bar', '?test=123')).toBe('http://www.google.com/foo/bar?test=123');
    expect( urlJoin('http://foobar.com', '', 'test')).toBe('http://foobar.com/test');
});
