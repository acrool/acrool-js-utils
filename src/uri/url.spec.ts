import {decodeQueryString, encodeQueryString, getMainDomain, getProtocolDomain, getSubDomain, urlJoin} from './uri';




describe('encodeQueryString', () => {
    it('should return a query string for key value object', () => {
        expect(encodeQueryString({keyword: '블랙프라이데이 (BlackFriday)', sex: 'F'})).toBe('keyword=%EB%B8%94%EB%9E%99%ED%94%84%EB%9D%BC%EC%9D%B4%EB%8D%B0%EC%9D%B4%20(BlackFriday)&sex=F');
        expect(encodeQueryString({})).toBe('');
        expect(encodeQueryString({startDate: '2024-01-02', endDate: undefined})).toBe('startDate=2024-01-02');
    });
});

describe('decodeQueryString', () => {
    it('should return a key value object for query string', () => {
        expect(decodeQueryString('?keyword=jack&sex=F')).toStrictEqual({keyword: 'jack', sex: 'F'});
        expect(decodeQueryString('keyword=jac-_%40k%26sex%3DF&sex=F')).toStrictEqual({keyword: 'jac-_@k', sex: 'F'});
        expect(decodeQueryString('keyword--F')).toBeUndefined();
    });
});


describe('getProtocolDomain', () => {
    it('should return a protocol domain for url', () => {
        expect(getProtocolDomain('http://www.google.com:8080/test?keyword=jack')).toBe('http://www.google.com');
        expect(getProtocolDomain('https://google.com/test?keyword=jack')).toBe('https://google.com');
        expect(getProtocolDomain('/test?keyword=jack')).toBe('');
    });
});



describe('getMainDomain', () => {
    it('should return a main domain for string', () => {
        expect(getMainDomain('http://www.google.com')).toBe('google.com');
        expect(getMainDomain('http://www.google.com:8080/about')).toBe('google.com');
        expect(getMainDomain('https://google.com')).toBe('google.com');
        expect(getProtocolDomain('/test?keyword=jack')).toBe('');
    });
});

describe('getSubDomain', () => {
    it('should return a sub domain for string', () => {
        expect(getSubDomain('http://www.google.com')).toBe('www');
        expect(getSubDomain('http://www.google.com:8080/about')).toBe('www');
        expect(getSubDomain('https://google.com')).toBe('');
    });
});

describe('urlJoin', () => {
    it('should return a merge string for array string', () => {
        expect(urlJoin('http://www.google.com/', 'foo/bar', '?test=123')).toBe('http://www.google.com/foo/bar?test=123');
        expect(urlJoin(['http://www.google.com/', 'foo/bar', '?test=123'])).toBe('http://www.google.com/foo/bar?test=123');
        expect(urlJoin(['http://www.google.com', '#!', 'foo/bar', '?test=123'])).toBe('http://www.google.com/#!/foo/bar?test=123');
        expect(urlJoin('http:', 'www.google.com/', 'foo/bar', '?test=123')).toBe('http://www.google.com/foo/bar?test=123');
        expect(urlJoin('http://', 'www.google.com/', 'foo/bar', '?test=123')).toBe('http://www.google.com/foo/bar?test=123');
        expect( urlJoin('http://foobar.com', '', 'test')).toBe('http://foobar.com/test');
    });
});


