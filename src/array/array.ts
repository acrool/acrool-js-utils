import {SortOrder, TSortByFn, TGroupTreeBy, TGroupByFn, TArrayOrEmpty} from './types';

/**
 * 插入資料到陣列的第一筆
 *
 * pull([1,2], 3)
 * > [3,1,2]
 *
 * @param arrayData
 * @param pullData
 */
export function pull<T, A extends TArrayOrEmpty<T>>(arrayData: A, pullData: T): A {
    if(!arrayData) return [pullData] as A;
    return [pullData].concat(arrayData.slice(0)) as A;
}

/**
 * 插入資料到陣列的結尾
 *
 * push([1,2], 3)
 * > [1,2,3]
 *
 * @param arrayData
 * @param pushData
 */
export function push<T, A extends TArrayOrEmpty<T>>(arrayData: A, pushData: T): T[] {
    if(!arrayData) return [pushData] as T[];
    return arrayData.slice(0).concat(pushData) as T[];
}

/**
 * 插入資料到陣列中
 *
 * insert([1,2,3], 1, 4)
 * > [1,4,2,3]
 *
 * @param arrayData
 * @param index
 * @param data
 */
export function insert<T, A extends TArrayOrEmpty<T>>(arrayData: A, index: number, data: T): T[] {
    if(!arrayData) return [data] as T[];
    return [...arrayData.slice(0, index), data, ...arrayData.slice(index)] as T[];
}

/**
 * 移動陣列順序
 *
 * move([A, B, C], 1, 2)
 * > [A, C, B]
 *
 * @param arrayData
 * @param index
 * @param toIndex
 */
export function move<T, A extends TArrayOrEmpty<T>>(arrayData: A, index: number, toIndex: number): A {
    if(!arrayData) return arrayData;

    if (index === toIndex) {
        return arrayData;
    }

    const newArrayData = [...arrayData];
    const target = newArrayData[index];
    newArrayData.splice(index, 1);
    newArrayData.splice(toIndex, 0, target);
    return newArrayData as A;
}


/**
 * 依賴 findIndex 後 removeByIndex
 *
 * removeFind([1,2,3], (item) => item === 2)
 * > [1,3]
 *
 * @param arrayData
 * @param fn
 */
export function removeFind<T, A extends TArrayOrEmpty<T>>(arrayData: A, fn: (item: T) => boolean): A{
    const index = arrayData?.findIndex(fn) ?? -1;
    if(index === -1){
        return arrayData;
    }
    return removeByIndex(arrayData, index) as A;
}


/**
 * 刪除陣列中的一筆資料
 *
 * removeByIndex([1,2,3], 1)
 * > [1,3]
 *
 * @param arrayData
 * @param index
 */
export function removeByIndex<T, A extends TArrayOrEmpty<T>>(arrayData: A, index: number): A {
    if(!arrayData) return arrayData;

    if(index === -1 || index > arrayData.length - 1) return arrayData;
    return [...arrayData.slice(0, index), ...arrayData.slice(index + 1)] as A;
}

/**
 * 更改陣列中的一筆資料
 *
 * modifyByIndex([{name: 'jack'}], 0, {name: 'imagine'})
 * > [{name: 'imagine'}]
 *
 * @param arrayData
 * @param index
 * @param indexModifyObj
 */
export function modifyByIndex<T, A extends TArrayOrEmpty<T>>(arrayData: A, index: number, indexModifyObj: Partial<T>): A {
    if(index === -1 || !arrayData || index > arrayData.length - 1) return arrayData;

    // Copy new object
    const newDaa: T = {
        ...arrayData[index],
        ...indexModifyObj,
    };
    // Copy new array
    const newArrayData: T[] = [...arrayData];
    newArrayData[index] = newDaa;
    return newArrayData as A;
}



/**
 * 取得陣列中的唯一值
 *
 * unique(['a', 'a', 'c'])
 * > ['a', 'c']
 *
 * @param data
 * @param selector
 */
export function unique<T>(data: T[], selector?: (item: T) => any): T[] {
    if(!data) return data;

    const uniqueItems = new Set();
    const result = new Array<T>();

    for (const item of data) {
        const key = selector ? selector(item) : item;
        if (!uniqueItems.has(key)) {
            uniqueItems.add(key);
            result.push(item);
        }
    }

    return result;
}



/**
 * 陣列轉字串 (發生例外錯誤回傳 空陣列)
 *
 * arrayJoin(['a', 'b'], ',')
 * > 'a,b'
 *
 * @param arrayData
 * @param separator
 */
export function arrayJoin(arrayData: TArrayOrEmpty<string>, separator: string): string{
    if(!arrayData) return '';

    return arrayData.join(separator);
}


/**
 * 分割陣列
 *
 * splitArray([1,2,3,4,5], 2)
 * > [[1,2], [3,4], [5]]
 *
 * @param arrayData
 * @param splitCount
 */
export function splitArray<T, A extends TArrayOrEmpty<T>>(arrayData: A, splitCount: number){
    if(!arrayData) return arrayData;

    const manyCount = Math.ceil(arrayData.length / splitCount);
    const targetData = new Array(manyCount).fill([]);
    return targetData.map((imageRow, index) => {
        return arrayData.slice(index * splitCount, (index*splitCount)+ splitCount);
    });
}



/**
 * GroupBy
 *
 * groupBy([{name: 'a', age: 1}, {name: 'b', age: 2}], (item) => item.age)
 * > {1: [{name: 'a', age: 1}], 2: [{name: 'b', age: 2}]}
 *
 * @param array
 * @param fn
 */
export function groupBy<T>(array: T[], fn: TGroupByFn<T>): Record<string | number, T[]> {
    return array.reduce((result, item) => {
        const key = fn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {} as Record<string | number, T[]>);
}


/**
 * Group TreeBy
 *
 * groupTreeBy([{name: 'a', age: 1}, {name: 'b', age: 2}], (item) => {
 *    return {
 *      groupKey: item.age,
 *      groupData: {age: item.age},
 *      child: item
 *    }
 * })
 * > [{age: 1, children: [{name: 'a', age: 1}]}, {age: 2, children: [{name: 'b', age: 2}]}]
 *
 *
 * @param array
 * @param groupByFn
 */
export function groupTreeBy<T, D, C>(array: T[], groupByFn: TGroupTreeBy<T, D, C>): Array<D & { children: C[] }> {
    const groupedData: Record<string | number, {children: C[]}> = {};

    array.forEach(item => {
        const {groupKey, groupData, child} = groupByFn(item);
        if (!groupedData[groupKey]) {
            groupedData[groupKey] = {
                ...groupData,
                children: [],
            };
        }
        groupedData[groupKey].children.push(child);
    });

    return Object.keys(groupedData).map(key => groupedData[key]) as Array<D & { children: C[] }>;
}





/**
 * Sort
 *
 * sort([3,2,1], (a, b) => a - b)
 * > [1,2,3]
 *
 * @param array
 * @param fn
 */
export function sort<T>(array: T[], fn: TSortByFn<T>): T[] {
    const clone = [...array];
    clone.sort(fn);
    return clone;
}


/**
 * 生成排序方法
 * @param selector
 * @param order
 */
export function generateSortByProperty<T>(selector: (row: T) => any, order: SortOrder = 'ASC'): (a: T, b: T) => number {
    return function(a: T, b: T): number {
        const aValue = selector(a);
        const bValue = selector(b);

        if (aValue < bValue) {
            return order === 'ASC' ? -1 : 1;
        }
        if (aValue > bValue) {
            return order === 'ASC' ? 1 : -1;
        }
        return 0;
    };
}
