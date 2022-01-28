/**
 * 插入資料到陣列的第一筆 (immutable)
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
 * ex: [1,2] -> [1,2,3]
 *
 * @param arrayData
 * @param pushData
 */
export function push<T>(arrayData: T[], pushData: T): T[] {
    return arrayData.slice(0).concat(pushData);
}
