import {
    pull,
    push,
    arrayJoin,
    removeByIndex,
    modifyByIndex,
    splitArray,
    unique,
    groupBy,
    sort,
    groupTreeBy
} from './array';

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



describe('sort', () => {
    const sourceArray = [
        {id: 1, name: 'jack'},
        {id: 3, name: 'gary'},
        {id: 2, name: 'imagine'},
    ];
    const sourceCheckDiffArray = [
        {id: 1, name: 'jack'},
        {id: 2, name: 'imagine'},
        {id: 3, name: 'gary'},
    ];

    const result = sort(sourceArray, (a, b) => {
        return a.id > b.id ? 1: -1;
    });

    it('should sort return new array', () => {
        expect(result).toStrictEqual(sourceCheckDiffArray);
    });

    it('should sort not modify source array', () => {
        expect(result).toStrictEqual(result);
    });



});





describe('unique', () => {
    const sourceArray1 = [1, 2, 2, 3, 3];
    const result1 = unique(sourceArray1);

    const sourceArray2 = ['a', 'b', 'b', 'c', 'c'];
    const result2 = unique(sourceArray2);

    const assignr = {
        imagine: {
            id: '01h4n8dd13',
            name: 'Imagine Chiu',
            avatarUrl: '/sample/avatar/female-1.jpg',
        },
        gary: {
            id: '01h4n7cc12',
            name: 'Gary Chien',
            avatarUrl: '/sample/avatar/female-2.jpg',
        },
        selin: {
            id: '01h4n7ee75',
            name: 'Selin Wu',
            avatarUrl: '/sample/avatar/female-3.jpg',
        }
    };

    const sourceArray3 = unique([assignr.selin, assignr.imagine, assignr.gary, assignr.selin, assignr.imagine], row => row.id);

    const sourceArray4 = unique([{...assignr.gary}, {...assignr.gary}, {...assignr.gary}], row => row.id);


    it('should return a unique for repeated array', () => {
        expect(result1).toStrictEqual([1, 2, 3]);
        expect(result2).toStrictEqual(['a', 'b', 'c']);
    });

    it('should return not modify source', () => {
        expect(sourceArray1).toEqual([1, 2, 2, 3, 3]);
        expect(sourceArray2).toEqual(['a', 'b', 'b', 'c', 'c']);
    });

    it('should return not modify source', () => {
        expect(sourceArray1).toEqual([1, 2, 2, 3, 3]);
        expect(sourceArray2).toEqual(['a', 'b', 'b', 'c', 'c']);
    });


    it('should return not modify source', () => {
        expect(sourceArray3).toEqual([{...assignr.selin}, {...assignr.imagine}, {...assignr.gary}]);
    });

    it('should return not modify source', () => {
        // expect(sourceArray3).toEqual([assignr.selin, assignr.imagine, assignr.gary]);
        expect(sourceArray4).toEqual([{...assignr.gary}]);
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




describe('groupBy', () => {
    it('should group items based on the provided function', () => {
        const array = [
            {id: 1, name: 'Alice'},
            {id: 2, name: 'Bob'},
            {id: 3, name: 'Alice'},
            {id: 4, name: 'Charlie'},
        ];

        const result = groupBy(array, (item) => item.name);

        expect(result).toEqual({
            Alice: [
                {id: 1, name: 'Alice'},
                {id: 3, name: 'Alice'},
            ],
            Bob: [
                {id: 2, name: 'Bob'},
            ],
            Charlie: [
                {id: 4, name: 'Charlie'},
            ],
        });
    });

    it('should handle empty array', () => {
        const array: any[] = [];

        const result = groupBy(array, (item) => item);

        expect(result).toEqual({});
    });

});




interface ISourceArray {
    id: number,
    name: string
    team: {id: string, name: string}
}
interface IResultArray {
    id: string,
    name: string
    children: Array<{id: string, name: string}>
}


describe('groupTreeBy', () => {

    it('should handle empty array', () => {
        const array: ISourceArray[] = [
            {id: 1, name: 'Alice', team: {id: 'A', name: 'frontend'}},
            {id: 2, name: 'Bob', team: {id: 'A', name: 'frontend'}},
            {id: 3, name: 'Alice', team: {id: 'B', name: 'backend'}},
            {id: 4, name: 'Charlie', team: {id: 'B', name: 'backend'}},
        ];


        const result = groupTreeBy(
            array,
            (item) => {
                const {team, ...child} = item;
                return {
                    groupKey: team.id,
                    groupData: {
                        id: team.id,
                        text: team.name
                    },
                    child: {
                        id: item.id,
                        nickName: item.name,
                    },
                };
            },
        );
        result.map(row => row.children.map(data => data.nickName));

        // result.map(row => row.)

        expect(result).toEqual([
            {
                id: 'A',
                text: 'frontend',
                children: [
                    {id: 1, nickName: 'Alice'},
                    {id: 2, nickName: 'Bob'}
                ],
            },
            {
                id: 'B',
                text: 'backend',
                children: [
                    {id: 3, nickName: 'Alice'},
                    {id: 4, nickName: 'Charlie'}
                ],
            }
        ]);
    });

});

