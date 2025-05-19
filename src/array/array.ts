import {SortOrder, TArrayOrEmpty, TEmpty,TGroupByFn, TGroupTreeBy, TSortByFn} from './types';

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
export function removeFind<T, A extends TArrayOrEmpty<T>>(arrayData: T[]|A, fn: (item: T) => boolean): A{
    if(!arrayData) return arrayData;

    const index = arrayData.findIndex(fn);
    if(index === -1){
        return arrayData as A;
    }
    return removeByIndex(arrayData, index) as A;
}

/**
 * 依賴 findIndex 後 updateByIndex
 *
 * updateFind([
 *    {id: 1, text: 'a'},
 *    {id: 2, text: 'b'},
 * ],{
 *   finder: (item) => item.id === 2,
 *   updater: (item) => { item.text = 'X'; }
 * }
 * )
 * > [
 *    {id: 1, text: 'a'},
 *    {id: 2, text: 'X'},
 *   ]
 *
 * @param arrayData
 * @param args
 */
export function updateFind<T, A extends TArrayOrEmpty<T>>(arrayData: T[]|A, args: {
    finder: (item: T) => boolean,
    updater: (item: T) => void
}): A{
    if(!arrayData) return arrayData;

    const index = arrayData.findIndex(args.finder);
    if(index === -1){
        return arrayData as A;
    }
    return updateByIndex(arrayData, index, args.updater) as A;
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
export function removeByIndex<T, A extends TArrayOrEmpty<T>>(arrayData: T[]|A, index: number): A {
    if(!arrayData) return arrayData;

    if(index === -1 || index > arrayData.length - 1) return arrayData as A;
    return [...arrayData.slice(0, index), ...arrayData.slice(index + 1)] as A;
}

/**
 * 更改陣列中的一筆資料
 *
 * updateByIndex([{name: 'jack'}], 0, {name: 'imagine'})
 * > [{name: 'imagine'}]
 *
 * @param arrayData
 * @param index
 * @param updateFn
 */
export function updateByIndex<T, A extends TArrayOrEmpty<T>>(arrayData: T[]|A, index: number, updateFn: (item: T) => void): A {
    if(index === -1 || !arrayData || index > arrayData.length - 1) return arrayData as A;

    // Copy new object
    const newDaa: T = {...arrayData[index]};

    updateFn(newDaa);

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
 * 取得陣列第一筆資料
 * arraySplit(['a','b','c']);
 * > a
 */
export function arrayFirst<T = undefined>(array?: T[]) {
    return array?.[0];
}









/**
 * 分割陣列
 *
 * arraySplit([1,2,3,4,5], 2)
 * > [[1,2], [3,4], [5]]
 *
 * @param arrayData
 * @param splitCount
 */
/**
 * 分割陣列
 *
 * arraySplit([1,2,3,4,5], 2)
 * > [[1,2], [3,4], [5]]
 *
 * @param arrayData
 * @param splitCount
 */
export function arraySplit<T>(arrayData: TArrayOrEmpty<T>, splitCount: number): T[][] | undefined {
    if (!arrayData || splitCount <= 0) return undefined;

    const groupCount = Math.ceil(arrayData.length / splitCount);
    return Array.from({length: groupCount}, (_, index) => {
        return arrayData.slice(index * splitCount, (index + 1) * splitCount);
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


/**
 * 生成 Array 數量
 * @param count 生成多少個
 * @param prefixKeyName 前綴 Key name
 */
export const generatorArray = (count: number, prefixKeyName = 'skeleton_') => {
    return Array.from({length: count}).map((row, idx) => `${prefixKeyName}${idx}`);
};






/**
 * 循環切換
 * const toggle = generatorArrayToggle(['a','b','c']);
 * toggle(a)
 * > b
 * toggle(b)
 * > c
 * toggle(c)
 * > a
 */
export function generatorArrayToggle<T>(data: T[]) {
    return (current: T) => {
        const currentIndex = data.indexOf(current);
        const nextIndex = (currentIndex + 1) % data.length;
        return data[nextIndex];
    };
}
