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
 * 更改陣列中的一筆資料
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
 */
export function unique(data: Array<number|string>): Array<number|string> {
    return [...(new Set(data))];
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
export function splitArray(sourceData: unknown[], splitCount: number){
    const manyCount = Math.ceil(sourceData.length / splitCount);
    const targetData = new Array(manyCount).fill([]);
    return targetData.map((imageRow, index) => {
        return sourceData.slice(index * splitCount, (index*splitCount)+ splitCount);
    });
}


type GroupByFn<T> = (item: T) => string | number;

/**
 * Group
 * @param array
 * @param fn
 */
export function groupBy<T>(array: T[], fn: GroupByFn<T>): Record<string | number, T[]> {
    return array.reduce((result, item) => {
        const key = fn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {} as Record<string | number, T[]>);
}
