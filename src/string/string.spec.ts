import {
    toCapitalize,
    upperLineToLowerCase,
    lowerLocaleToISOCode,
    lowerCaseToUpLineCase,
    jsonDecode,
    removeStartEnd,
    dashToLowerCase,
    removeHtmlTag, filterNumber, decodeStrAndNumber, decodeStrAndNumberGroup
} from './string';



describe('toCapitalize', () => {
    it('should return a capitalize string for string', () => {
        expect(toCapitalize('helloWorld')).toBe('HelloWorld');
    });
});


describe('dashToLowerCase', () => {
    it('should return a lower case string for string', () => {
        expect(dashToLowerCase('fill-rule')).toBe('fillRule');
    });
});


describe('upperLineToLowerCase', () => {
    it('should return a lower case string for upperLine string', () => {
        expect(upperLineToLowerCase('Hello_World')).toBe('helloWorld');
    });
});


describe('lowerLocaleToISOCode', () => {
    it('should return a ISOCode locale for dash lowerLocale', () => {
        expect(lowerLocaleToISOCode('en-us')).toBe('en-US');
    });
});


describe('lowerCaseToUpLineCase', () => {
    it('should return a up line case string for dash lower case string', () => {
        expect(lowerCaseToUpLineCase('helloWorld')).toBe('HELLO_WORLD');
    });
});




describe('stringSplit', () => {
    it('should return a array for string', () => {
        const jsonObj = {name: 'jack'};
        const jsonString = JSON.stringify({name: 'jack'});
        const jsonErrorString = '{name:_\'jack\'}';
        expect(jsonDecode(jsonString)).toStrictEqual(jsonObj);
        expect(jsonDecode(jsonErrorString)).toBeUndefined();
    });
});


describe('removeStartEnd', () => {
    it('should return a remove start end string for string', () => {
        const testStr = '[\'2123123\']]';
        expect(removeStartEnd(testStr, '[', ']')).toStrictEqual('\'2123123\']');

        const path = '<path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z"/>';
        const symbol = `<symbol id="icon_google" viewBox="0 0 1024 1024">${path}</symbol>`;
        expect(removeStartEnd(symbol, '<symbol\\b[^>]*?(?:viewBox=\\"(\\b[^"]*)\\")?>', '<\\/symbol>')).toStrictEqual(path);
    });
});



describe('removeHtmlTag', () => {
    it('should return a filter html tag by span', () => {
        expect(removeHtmlTag('<span>my name</span>')).toBe('my name');
        expect(removeHtmlTag('<span>my name</span>', ['span'])).toBe('<span>my name</span>');
    });
    it('should return a filter html tag by multi tag', () => {
        expect(removeHtmlTag('<span>my <p>name</p></span>')).toBe('my name');
        expect(removeHtmlTag('<span>my <p>name</p></span>', ['p'])).toBe('my <p>name</p>');
        expect(removeHtmlTag('<span>my <p>name</p></span>', ['span'])).toBe('<span>my name</span>');
    });
});


describe('filterNumber', () => {
    it('should return the number when the value is a string containing only digits', () => {
        expect(filterNumber('1234')).toBe(1234);
    });

    it('should return the default value when the value contains non-digit characters', () => {
        expect(filterNumber('asd1234', 0)).toBe(0);
    });

    it('should return the default value when the value is an empty string', () => {
        expect(filterNumber('', 0)).toBe(0);
    });

    it('should return the number when the value is a number', () => {
        expect(filterNumber(1234, 0)).toBe(1234);
    });

    it('should return the default value when the value is null', () => {
        expect(filterNumber(null, 0)).toBe(0);
    });

    // 其他邊界情況的測試，例如 undefined, 非數字字符串等
    // ...
});



describe('decodeStrAndNumber', () => {
    it('should return a decode Str And Number', () => {
        expect(decodeStrAndNumber('b12.31 22.11')).toStrictEqual(['b', 12.31, 22.11]);
        expect(decodeStrAndNumber('b-12.31-22.11')).toStrictEqual(['b', -12.31, -22.11]);
        expect(decodeStrAndNumber('a-45.22-35.21')).toStrictEqual(['a', -45.22, -35.21]);
    });

});

describe('decodeStrAndNumberGroup', () => {
    it('should return a decode Str And Number', () => {
        expect(decodeStrAndNumberGroup('b12.31 22.11 a45.22 35.21')).toStrictEqual(['b12.31 22.11', 'a45.22 35.21']);
        expect(decodeStrAndNumberGroup('b-12.31-22.11 a45.22-35.21')).toStrictEqual(['b-12.31-22.11', 'a45.22-35.21']);
        // expect(decodeStrAndNumberGroup('a45.22 -35.21')).toStrictEqual(['a', 45.22, -35.21]);
    });

});
