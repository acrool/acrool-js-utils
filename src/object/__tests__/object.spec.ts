import {autoMapper, filterIsTrue, reverseObj} from '../object';


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
