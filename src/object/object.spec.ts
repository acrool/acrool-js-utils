import {autoMapper, filterIsTrue, reverseObj, objectKeys} from './object';


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


describe('objectKeys', () => {
    const source = {name: 2};
    const t = objectKeys(source).map(key => source[key]);

    it('should return a key obj data for obj', () => {
        expect(objectKeys({name: 'jack'})).toStrictEqual(['name']);
    });
});
