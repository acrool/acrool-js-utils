import {pull, push, arrayJoin, removeByIndex, modifyByIndex, splitArray, unique} from './array';

describe('pull', () => {
    const sourceArray = [1, 2];
    const result = pull(sourceArray, 3);

    it('should return a [3, 1, 2] for [1, 2] pull 3', () => {
        expect(result).toStrictEqual([3, 1, 2]);
    });

    it('should return not modify source', () => {
        expect(sourceArray).toEqual([1, 2]);
    });
});

describe('push', () => {
    const sourceArray = [1, 2];
    const result = push(sourceArray, 3);

    it('should return a [1, 2, 3] for [1, 2] push 3', () => {
        expect(result).toStrictEqual([1, 2, 3]);
    });
    it('should return not modify source', () => {
        expect(sourceArray).toEqual([1, 2]);
    });
});


describe('removeByIndex', () => {
    const sourceArray = [1, 2, 3];
    const result = removeByIndex(sourceArray, 1);

    it('should return a [1, 2, 3] for [1, 2] remove 3', () => {
        expect(result).toStrictEqual([1, 3]);
    });

    it('should return not modify source', () => {
        expect(sourceArray).toEqual([1, 2, 3]);
    });
});


describe('modifyByIndex', () => {
    const sourceArray = [
        {id: 1, name: 'jack'},
        {id: 2, name: 'imagine'},
        {id: 3, name: 'gary'},
    ];
    const sourceCheckDiffArray = [
        {id: 1, name: 'jack'},
        {id: 2, name: 'imagine'},
        {id: 3, name: 'gary'},
    ];

    const result = modifyByIndex(sourceArray, 0, {name: 'jack wu'});

    it('should return a [1, 2, 3] for [1, 2] remove 3', () => {

        const targetArray = [
            {id: 1, name: 'jack wu'},
            {id: 2, name: 'imagine'},
            {id: 3, name: 'gary'},
        ];
        expect(result).toStrictEqual(targetArray);
    });

    it('should return not modify source', () => {
        expect(sourceArray).toEqual(sourceCheckDiffArray);
    });
});





describe('unique', () => {
    const sourceArray1 = [1, 2, 2, 3, 3];
    const result1 = unique(sourceArray1);

    const sourceArray2 = ['a', 'b', 'b', 'c', 'c'];
    const result2 = unique(sourceArray2);

    it('should return a unique for repeated array', () => {
        expect(result1).toStrictEqual([1, 2, 3]);
        expect(result2).toStrictEqual(['a', 'b', 'c']);
    });

    it('should return not modify source', () => {
        expect(sourceArray1).toEqual([1, 2, 2, 3, 3]);
        expect(sourceArray2).toEqual(['a', 'b', 'b', 'c', 'c']);
    });
});





describe('arrayJoin', () => {
    const sourceArray = ['uploads', 'profile'];
    const result = arrayJoin(sourceArray, '/');

    it('should return a string for array', () => {
        expect(result).toStrictEqual('uploads/profile');
    });

    it('should return not modify source', () => {
        expect(sourceArray).toEqual(['uploads', 'profile']);
    });
});



describe('splitArray', () => {

    it('should return 2 level array for array', () => {
        expect(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual([[1,2], [3,4], [5,6],[7,8],[9]]);
        expect(splitArray([1, 2, 3, 4, 5, 6], 3)).toEqual([[1,2,3], [4,5,6]]);
    });

});


