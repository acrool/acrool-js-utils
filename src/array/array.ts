import {SortOrder, SortByFn, TGroupTreeBy, TGroupByFn} from './types';

/**
 * 插入資料到陣列的第一筆 (immutable)
 * ps: 不用先複製, 方法內會複製出來
 * ex: [1,2] -> [3,1,2]
 *
 * @param arrayData
 * @param pushData
 */
export function pull<T>(arrayData: T[], pushData: T): T[] {
    return [pushData].concat(arrayData.slice(0));
}

/**
 * 插入資料到陣列的結尾 (immutable)
 * ps: 不用先複製, 方法內會複製出來
 * ex: [1,2] -> [1,2,3]
 *
 * @param arrayData
 * @param pushData
 */
export function push<T>(arrayData: T[], pushData: T): T[] {
    return arrayData.slice(0).concat(pushData);
}

/**
 * 插入資料到陣列中
 * ex: [A, B, C] -> [A, D, B, C]
 *
 * @param arrayData
 * @param index
 * @param data
 */
export function insert<T>(arrayData: T[], index: number, data: T): T[] {
    return [...arrayData.slice(0, index), data, ...arrayData.slice(index)];
}

/**
 * 移動陣列順序 (immutable)
 * ex: [A, B, C] -> [A, C, B]
 *
 * @param arrayData
 * @param index
 * @param toIndex
 */
export function move<T>(arrayData: T[], index: number, toIndex: number): T[] {
    if (index === toIndex) {
        return arrayData;
    }

    const newArrayData = [...arrayData];
    const target = newArrayData[index];
    newArrayData.splice(index, 1);
    newArrayData.splice(toIndex, 0, target);
    return newArrayData;
}


/**
 * 依賴 findIndex 後 removeByIndex
 * @param arrayData
 * @param fn
 */
export function removeFind<T>(arrayData: T[], fn: (item: T) => boolean): T[]{
    const index = arrayData.findIndex(fn);
    if(index === -1){
        return arrayData;
    }
    return removeByIndex(arrayData, index);
}


/**
 * 刪除陣列中的一筆資料 (immutable)
 * ps: 不用先複製, 方法內會複製出來
 * ex: [1,2,3] -> [1,3]
 *
 * @param arrayData
 * @param index
 */
export function removeByIndex<T>(arrayData: T[], index: number): T[] {
    if(index === -1 || index > arrayData.length - 1) return arrayData;
    return [...arrayData.slice(0, index), ...arrayData.slice(index + 1)];
}

/**
 * 更改陣列中的一筆資料 (immutable)
 * ps: 不用先複製, 方法內會複製出來
 * ex: [{name: jack}] => [{name: 'imagine'}]
 *
 * @param arrayData
 * @param index
 * @param indexModifyObj
 */
export function modifyByIndex<T>(arrayData: T[], index: number, indexModifyObj: Partial<T>): T[] {
    if(index === -1 || index > arrayData.length - 1) return arrayData;
    // Copy new object
    const newDaa: T = {
        ...arrayData[index],
        ...indexModifyObj,
    };
    // Copy new array
    const newArrayData: T[] = [...arrayData];
    newArrayData[index] = newDaa;
    return newArrayData;
}



/**
 * 取得陣列中的唯一值
 * ex: ['a', 'a', 'c'] -> ['a','c']
 *
 * @param data
 * @param selector
 */
export function unique<T>(data: Array<T>, selector?: (item: T) => any): Array<T> {
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
 * @param arr
 * @param separator
 */
export function arrayJoin(arr: string[], separator: string): string{

    try {
        return arr.join(separator);
    } catch (err) {}

    return '';
}


/**
 * 分割陣列
 * [1,2,3,4,5] => [[1,2], [3,4], [5]]
 * @param sourceData
 * @param splitCount
 */
export function splitArray<T>(sourceData: T[], splitCount: number){
    const manyCount = Math.ceil(sourceData.length / splitCount);
    const targetData = new Array(manyCount).fill([]);
    return targetData.map((imageRow, index) => {
        return sourceData.slice(index * splitCount, (index*splitCount)+ splitCount);
    });
}



/**
 * Group (immutable)
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
 * Group TreeBy (immutable)
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
 * Sort 排序陣列 (immutable)
 * @param array
 * @param fn
 */
export function sort<T>(array: T[], fn: SortByFn<T>): T[] {
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
