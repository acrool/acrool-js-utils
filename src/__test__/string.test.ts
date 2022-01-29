import {
    toCapitalize,
    upperLineToLowerCase,
    lowerLocaleToISOCode,
    lowerCaseToUpLineCase,
    paddingLeft,
    decodeToJson,
    stringSplit,
} from '../string';

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


test('paddingLeft', () => {
    expect(paddingLeft('20', 4)).toBe('0020');
});



test('decodeToJson', () => {
    const jsonObj = {name: 'jack'};
    const jsonString = JSON.stringify({name: 'jack'});
    const jsonErrorString = "{name:_'jack'}";
    expect(decodeToJson(jsonString)).toStrictEqual(jsonObj);
    expect(decodeToJson(jsonErrorString)).toBeUndefined();
});


test('stringSplit', () => {
    const anyString: any = false;
    expect(stringSplit('s-m-x', '-')).toStrictEqual(['s', 'm', 'x']);
    expect(stringSplit(anyString, '-')).toStrictEqual([]);
});

