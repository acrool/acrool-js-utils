import {
    arrayCompose,
    isDate,
    isEmpty,
    isIP,
    isIPUrl,
    isJSON,
    isNotEmpty,
    isNumber,     objsComposeByCode,
    objsComposeById} from './equal';



const testEmptyFn = (name: string) => `mr_${name}`;

const testClientFn = (name?: string) => {
    // 試試看拿掉 ! 會不會判別錯誤
    if (!isEmpty(name)) {
        testEmptyFn(name);
        const nickName: string = name; // 这里 TypeScript 应该能够推断 test 不是 null 或 undefined
    }
    // 試試看拿掉 ! 會不會判別錯誤
    if (isNotEmpty(name)) {
        testEmptyFn(name);
        const nickName: string = name; // 这里 TypeScript 应该能够推断 test 不是 null 或 undefined
    }
};


describe('isEmpty', () => {
    it('should return a true for empty string', () => {
        expect(isEmpty('')).toBeTruthy();
    });

    it('should return a true for empty object', () => {
        expect(isEmpty({})).toBeTruthy();
    });

    it('should return a true for zero (isZero: true)', () => {
        expect(isEmpty(0, {isZero: true})).toBeTruthy();
    });

    it('should return a true for string number (isZero: true)', () => {
        expect(isEmpty('0', {isZero: true})).toBeTruthy();
    });

    it('should return a false for number (isZero: false)', () => {
        expect(isEmpty(0, {isZero: false})).toBeFalsy();
    });

    it('should return a false for string number (isZero: false)', () => {
        expect(isEmpty('0', {isZero: false})).toBeFalsy();
    });

    it('should return a true for string false (isFalse: false)', () => {
        expect(isEmpty('false', {isFalse: true})).toBeTruthy();
    });

    it('should return a true for false (isFalse: false)', () => {
        expect(isEmpty(false, {isFalse: true})).toBeTruthy();
    });

    it('should return a false for string false (isFalse: false)', () => {
        expect(isEmpty('false', {isFalse: false})).toBeFalsy();
    });

    it('should return a false for false (isFalse: false)', () => {
        expect(isEmpty(false, {isFalse: false})).toBeFalsy();
    });

    it('should return a true for empty array', () => {
        expect(isEmpty([])).toBeTruthy();
    });

    it('should return a true for null', () => {
        expect(isEmpty(null)).toBeTruthy();
    });

    it('should return a true for undefined', () => {
        expect(isEmpty(undefined)).toBeTruthy();
    });
    
    it('should return a false for string', () => {
        expect(isEmpty('helloWorld')).toBeFalsy();
    });
});


describe('isNotEmpty', () => {
    it('should return a false for empty string', () => {
        expect(isNotEmpty('')).toBeFalsy();
    });

    it('should return a false for number zero (isZero: true)', () => {
        expect(isNotEmpty(0, {isZero: true})).toBeFalsy();
    });

    it('should return a false for string zero (isZero: true)', () => {
        expect(isNotEmpty('0', {isZero: true})).toBeFalsy();
    });

    it('should return a true for number zero (isZero: false)', () => {
        expect(isNotEmpty(0, {isZero: false})).toBeTruthy();
    });

    it('should return a true for string zero (isZero: false)', () => {
        expect(isNotEmpty('0', {isZero: false})).toBeTruthy();
    });
    it('should return a false for string false (isFalse: true)', () => {
        expect(isNotEmpty('false', {isFalse: true})).toBeFalsy();
    });

    it('should return a false for false (isFalse: true)', () => {
        expect(isNotEmpty(false, {isFalse: true})).toBeFalsy();
    });

    it('should return a true for string false (isFalse: false)', () => {
        expect(isNotEmpty('false', {isFalse: false})).toBeTruthy();
    });

    it('should return a true for boolean false (isFalse: false)', () => {
        expect(isNotEmpty(false, {isFalse: false})).toBeTruthy();
    });

    it('should return a false for empty array', () => {
        expect(isNotEmpty([])).toBeFalsy();
    });

    it('should return a false for null', () => {
        expect(isNotEmpty(null)).toBeFalsy();
    });

    it('should return a false for undefined', () => {
        expect(isNotEmpty(undefined)).toBeFalsy();
    });

    it('should return a true for string', () => {
        expect(isNotEmpty('helloWorld')).toBeTruthy();
    });
});



describe('isDate', () => {
    it('should return a true for - separator format date', () => {
        expect(isDate('2022-01-09')).toBeTruthy();
    });

    it('should return a true for / separator format date', () => {
        expect(isDate('2022/01/09')).toBeTruthy();
    });

    it('should return a true for . separator format date', () => {
        expect(isDate('2022.01.09')).toBeTruthy();
    });

    it('should return a trfalseue for no separator format date', () => {
        expect(isDate('20220109')).toBeFalsy();
    });

    it('should return a false for value exceeded date', () => {
        expect(isDate('2022/13/40')).toBeFalsy();
    });

    it('should return a false for non-date format', () => {
        expect(isDate('helloWorld')).toBeFalsy();
    });
});



describe('isNumber', () => {
    it('should return a true for number', () => {
        // expect(isNumber('192.168')).toBeTruthy();
        expect(isNumber(192.168)).toBeTruthy();
        expect(isNumber('100')).toBeTruthy();
        expect(isNumber(100)).toBeTruthy();
    });

    it('should return a false for number', () => {
        expect(isNumber('192.168.223')).toBeFalsy();
        expect(isNumber('100x')).toBeFalsy();
        expect(isNumber('100e')).toBeFalsy();
        expect(isNumber(undefined)).toBeFalsy();
        expect(isNumber(null)).toBeFalsy();
        expect(isNumber('')).toBeFalsy();
    });

});




describe('isIp', () => {
    it('should return a true for ip', () => {
        expect(isIP('192.168.1.10')).toBeTruthy();
        expect(isIP('1.168.11.11')).toBeTruthy();
    });

    it('should return a false for value exceeded date', () => {
        expect(isIP('192.168.299.299')).toBeFalsy();
        expect(isIP('a.d.12312')).toBeFalsy();
        expect(isIP('2402:7500:a17:f8')).toBeFalsy();
        expect(isIP('::1')).toBeFalsy();
    });

    it('should return a false for non-ip format', () => {
        expect(isIP('http://58.180.27.75/img_item/2022/11/21/LEE18DRX22112112_154V.jpg')).toBeFalsy();
    });
});



describe('isIPUrl', () => {
    it('should return a true for ip url', () => {
        expect(isIPUrl('http://58.180.27.75/img_item/2022/11/21/LEE18DRX22112112_154V.jpg')).toBeTruthy();
    });

    it('should return a false for non-ip url', () => {
        expect(isIPUrl('http://www.google.com/img_item/2022/11/21/LEE18DRX22112112_154V.jpg')).toBeFalsy();
    });
});


describe('isJSON', () => {
    const jsonString = JSON.stringify({name: 'jack'});

    it('should return a true for json string', () => {
        expect(isJSON(jsonString)).toBeTruthy();
    });

    it('should return a false for non-json string', () => {
        expect(isJSON('{name:_\'jack\'}')).toBeFalsy();
    });
});


describe('objsComposeById', () => {
    const prev1 = [{id: 1, name: 'imagine'}, {id: 2, name: 'jack'}];
    const prev2 = [{id: 1, name: 'imagine'}, {id: 3, name: 'jack'}];
    const next1 = [{id: 1, name: 'imagine'}, {id: 2, name: 'jack'}];
    const next2 = [{id: 1, name: 'imagine'}, {id: 2, name: '___jack___'}];


    it('should return a true for same id array object', () => {
        expect(objsComposeById(prev1, next1)).toBeTruthy();
        expect(objsComposeById(prev1, next2)).toBeTruthy();
    });

    it('should return a false for not same id array object', () => {
        expect(objsComposeById(prev2, next1)).toBeFalsy();
    });
});


describe('objsComposeByCode', () => {
    const prev1 = [{code: 1, name: 'imagine'}, {code: 2, name: 'jack'}];
    const prev2 = [{code: 1, name: 'imagine'}, {code: 3, name: 'jack'}];
    const next1 = [{code: 1, name: 'imagine'}, {code: 2, name: 'jack'}];
    const next2 = [{code: 1, name: 'imagine__'}, {code: 2, name: '___jack___'}];


    it('should return a true for same id array object', () => {
        expect(objsComposeByCode(prev1, next1)).toBeTruthy();
        expect(objsComposeByCode(prev1, next2)).toBeTruthy();
    });

    it('should return a false for not same id array object', () => {
        expect(objsComposeByCode(prev2, next1)).toBeFalsy();
    });
});




describe('arrayCompose', () => {
    test('should return true for arrays with the same elements in different orders', () => {
        expect(arrayCompose([1, 2, 3], [3, 2, 1])).toBe(true);
    });

    test('should return false for arrays with different elements', () => {
        expect(arrayCompose([1, 2, 3], [3, 2, 4])).toBe(false);
    });

    test('should return true for arrays with duplicate elements and the same frequencies', () => {
        expect(arrayCompose([1, 2, 2, 3], [3, 2, 2, 1])).toBe(true);
    });

    test('should return false for arrays with duplicate elements but different frequencies', () => {
        expect(arrayCompose([1, 2, 2], [2, 1, 1])).toBe(false);
    });

    test('should return true for empty arrays', () => {
        expect(arrayCompose([], [])).toBe(true);
    });

    test('should return false when one array is empty and the other is not', () => {
        expect(arrayCompose([1], [])).toBe(false);
        expect(arrayCompose([], [1])).toBe(false);
    });

    test('should return true for arrays with mixed types but same values', () => {
        expect(arrayCompose([1, '2', true], [true, '2', 1])).toBe(true);
    });

    test('should return false for arrays with objects (reference comparison)', () => {
        expect(arrayCompose([{a: 1}], [{a: 1}])).toBe(false);
    });

    test('should handle special cases like NaN correctly', () => {
        expect(arrayCompose([NaN], [NaN])).toBe(true);
    });

    test('should treat 0 and -0 as equal', () => {
        expect(arrayCompose([0, -0], [-0, 0])).toBe(true);
    });

    test('should return true for arrays with null and undefined in different orders', () => {
        expect(arrayCompose([null, undefined], [undefined, null])).toBe(true);
    });
});
