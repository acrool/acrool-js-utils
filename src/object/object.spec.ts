import {autoMapper, filterIsTrue, reverseObj, objectKeys, objectAssignValue} from './object';


describe('filterIsTrue', () => {
    it('should return a filter number for boolean array', () => {
        expect(filterIsTrue({_1: true, _2: false, _3: true})).toStrictEqual([1, 3]);
    });
});

describe('autoMapper', () => {
    it('should return a mapper data for obj', () => {
        expect(autoMapper({name: 'jack'}, {name: 'id'})).toStrictEqual({id: 'jack'});
        expect(autoMapper({name: 'jack'}, {data: 'body'})).toStrictEqual({name: 'jack'});
    });
});


describe('reverseObj', () => {
    it('should return a reverse obj data for obj', () => {
        expect(reverseObj({name: 'jack'})).toStrictEqual({jack: 'name'});
    });
});



describe('objectAssignValue', () => {
    it('Only keys that exist on the original object should be updated', () => {
        const originObj = {name: 'Alice', age: 25, country: 'USA'};
        const assignObj = {name: 'Bob', age: 30, city: 'New York'};

        const result = objectAssignValue(originObj, assignObj);

        expect(result).toEqual({
            name: 'Bob',
            age: 30,
            country: 'USA',  // `country` 保持不變
        });
    });

    it('Keys in the original object should be kept unaffected by assignObj', () => {
        const originObj = {name: 'Alice', age: 25};
        const assignObj = {city: 'New York'};

        const result = objectAssignValue(originObj, assignObj);

        expect(result).toEqual({
            name: 'Alice',
            age: 25,  // `age` 保持不變
        });
    });

    it('Should support partial updates', () => {
        const originObj = {name: 'Alice', age: 25, country: 'USA'};
        const assignObj = {age: 30};

        const result = objectAssignValue(originObj, assignObj);

        expect(result).toEqual({
            name: 'Alice',
            age: 30,   // 只有 `age` 被更新
            country: 'USA',
        });
    });

    it('When assignObj is an empty object, the original object should not be changed.', () => {
        const originObj = {name: 'Alice', age: 25};
        const assignObj = {};

        const result = objectAssignValue(originObj, assignObj);

        expect(result).toEqual({
            name: 'Alice',
            age: 25,  // 原始物件保持不變
        });
    });

    it('Should support object keys with different types', () => {
        const originObj = {name: 'Alice', age: 25, isActive: true};
        const assignObj = {age: 30, isActive: false};

        const result = objectAssignValue(originObj, assignObj);

        expect(result).toEqual({
            name: 'Alice',
            age: 30,          // `age` 被更新為數字型別
            isActive: false,  // `isActive` 被更新為布林型別
        });
    });

    it('The original object key that does not exist in assignObj should be preserved', () => {
        const originObj = {name: 'Alice', age: 25, country: 'USA'};
        const assignObj = {name: 'Bob'};

        const result = objectAssignValue(originObj, assignObj);

        expect(result).toEqual({
            name: 'Bob',     // `name` 被更新
            age: 25,         // `age` 保持不變
            country: 'USA',  // `country` 保持不變
        });
    });
});


describe('objectKeys', () => {
    const source = {name: 2};
    const t = objectKeys(source).map(key => source[key]);

    it('should return a key obj data for obj', () => {
        expect(objectKeys({name: 'jack'})).toStrictEqual(['name']);
    });
});
