import {
    arrayFirst,
    arrayJoin,
    arraySplit,
    generateSortByProperty,
    generatorArray,
    generatorArrayToggle,
    groupBy,
    groupTreeBy,
    insert,
    move,
    pull,
    push,
    removeByIndex,
    removeFind,
    sort,
    unique,
    updateByIndex,
    updateFind} from './array';


describe('array', () => {




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

    describe('move', () => {
        const sourceArray = ['A', 'B', 'C'];

        it('should return a [A, B, C] mvoe to [A, C, B]', () => {
            const result = move(sourceArray, 1, 2);
            expect(result).toStrictEqual(['A', 'C', 'B']);
        });
        it('should return a [A, B, C] mvoe to [C, A, B]', () => {
            const result = move(sourceArray, 2, 0);
            expect(result).toStrictEqual(['C', 'A', 'B']);
            expect(sourceArray).toStrictEqual(['A', 'B', 'C']);
        });

    });

    describe('insert', () => {
        const sourceArray = ['A', 'B', 'C'];

        it('should return a [A, B, C] insert to [A, D, B, C]', () => {
            const result = insert(sourceArray, 1, 'D');
            expect(result).toStrictEqual(['A', 'D', 'B', 'C']);
            expect(sourceArray).toStrictEqual(['A', 'B', 'C']);
        });
        it('should return a null insert to [A]', () => {
            const result = insert(null, 1, 'A');
            expect(result).toStrictEqual(['A']);
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


    describe('removeFind', () => {
        const sourceArray = [
            {id: 1, name: 'jack'},
            {id: 2, name: 'imagine'},
            {id: 3, name: 'gary'},
        ];
        const sourceCheckDiffArray = [
            {id: 1, name: 'jack'},
            {id: 3, name: 'gary'},
        ];

        const result = removeFind(sourceArray, row => row?.id === 2);

        it('should return a [1, 2, 3] for [1, 2] remove 3', () => {
            expect(result).toStrictEqual(sourceCheckDiffArray);
        });

        it('should return not modify source', () => {
            const targetArray = [
                {id: 1, name: 'jack'},
                {id: 2, name: 'imagine'},
                {id: 3, name: 'gary'},
            ];

            expect(sourceArray).toEqual(targetArray);
        });
    });


    describe('updateByIndex', () => {
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

        const result = updateByIndex(sourceArray, 0, row => row.name = 'jack wu');

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


    describe('updateFind', () => {
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

        const result = updateFind(sourceArray, {
            finder: row => row.id === 1,
            updater: row => row.name = 'jack wu'
        });

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



    describe('arraySplit', () => {
        it('should return 2 level array for array', () => {
            const t = arraySplit([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);

            expect(arraySplit([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual([[1,2], [3,4], [5,6],[7,8],[9]]);
            expect(arraySplit([1, 2, 3, 4, 5, 6], 3)).toEqual([[1,2,3], [4,5,6]]);
        });
    });




    describe('arrayFirst', () => {
        it('Get the first data in the array', () => {
            expect(arrayFirst(['a', 'b', 'c'])).toEqual('a');
            expect(arrayFirst([])).toEqual(undefined);
            expect(arrayFirst(undefined)).toEqual(undefined);
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

        const array: ISourceArray[] = [
            {id: 1, name: 'Alice', team: {id: 'A', name: 'frontend'}},
            {id: 2, name: 'Bob', team: {id: 'A', name: 'frontend'}},
            {id: 3, name: 'Alice', team: {id: 'B', name: 'backend'}},
            {id: 4, name: 'Charlie', team: {id: 'B', name: 'backend'}},
        ];


        it('should handle empty array', () => {

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

            // only test type
            // result.map(row => row.children.map(data => data.nickName));


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


        it('should handle child ids', () => {

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
                        child: item.id,
                    };
                },
            );

            // only test type
            result.map(row => row.children.map(id => id));

            // result.map(row => row.)

            expect(result).toEqual([
                {
                    id: 'A',
                    text: 'frontend',
                    children: [1,2]
                },
                {
                    id: 'B',
                    text: 'backend',
                    children: [3,4]
                }
            ]);
        });

    });



    describe('generateSortByProperty', () => {

        const arrayData: ISourceArray[] = [
            {id: 1, name: 'Alice', team: {id: 'A', name: 'frontend'}},
            {id: 2, name: 'Bob', team: {id: 'A', name: 'frontend'}},
            {id: 3, name: 'Alice', team: {id: 'B', name: 'backend'}},
            {id: 4, name: 'Charlie', team: {id: 'B', name: 'backend'}},
        ];

        // 測試 generateSortByProperty 方法
        it('should return a sort function', () => {
            const sortFn = generateSortByProperty<ISourceArray>((item) => item.id);
            expect(sortFn).toBeInstanceOf(Function);
            expect(sortFn(arrayData[0], arrayData[1])).toEqual(-1);
            expect(sortFn(arrayData[1], arrayData[0])).toEqual(1);
            expect(sortFn(arrayData[0], arrayData[0])).toEqual(0);
        });


    });

});




describe('generatorArray', () => {
    it('should generate an array of specified count with default prefix', () => {
        const count = 3;
        const result = generatorArray(count, 'card_');

        expect(result).toEqual(['card_0', 'card_1', 'card_2']);
    });

    it('should generate an array of specified count without prefix', () => {
        const count = 3;
        const result = generatorArray(count);

        expect(result).toEqual(['skeleton_0', 'skeleton_1', 'skeleton_2']);
    });

    it('should return an empty array when count is 0', () => {
        const result = generatorArray(0, 'skeleton_');

        expect(result).toEqual([]);
    });

    it('should handle negative count values and return an empty array', () => {
        const result = generatorArray(-1, 'skeleton_');

        expect(result).toEqual([]);
    });
});





describe('generatorArrayToggle', () => {
    it('should toggle through an array of strings', () => {
        const toggle = generatorArrayToggle(['a', 'b', 'c']);

        expect(toggle('a')).toBe('b');
        expect(toggle('b')).toBe('c');
        expect(toggle('c')).toBe('a');
    });

    it('should work with numbers', () => {
        const toggle = generatorArrayToggle([1, 2, 3]);

        expect(toggle(1)).toBe(2);
        expect(toggle(2)).toBe(3);
        expect(toggle(3)).toBe(1);
    });

    it('should return the next item in array with mixed types', () => {
        const toggle = generatorArrayToggle(['a', 1, true]);

        expect(toggle('a')).toBe(1);
        expect(toggle(1)).toBe(true);
        expect(toggle(true)).toBe('a');
    });

    it('should handle array with single element', () => {
        const toggle = generatorArrayToggle(['only']);

        expect(toggle('only')).toBe('only');
    });

    it('should return first if current value is not in the array', () => {
        const toggle = generatorArrayToggle(['a', 'b', 'c']);

        expect(toggle('vvv')).toBe('a');
    });
});
