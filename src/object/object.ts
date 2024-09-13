/**
 * 過濾物件keyValue中, 將等於true的收集為陣列
 * ex: {_1: false, _2: true} -> [2]
 *
 * hookForm getValues
 * @param checkedId
 */
export function filterIsTrue(checkedId: {
    [key: string]: string | number | boolean | undefined
}): number[] {
    const ids = [];
    for (const id in checkedId) {
        // 過濾掉不等於 true 的 Key
        if (checkedId[id]) {
            ids.push(Number(id.replace('_', '')));
        }
    }
    return ids;
}




/**
 * 反轉物件
 * ex: {'name': 'jack'} -> {jack: 'name'}
 *
 * use: reverseObj({'name': 'jack'})
 * @param obj
 */
export function reverseObj<T = any>(obj: { [key: string]: any }): T {
    const prev = {} as any;
    return Object.entries(obj)
        .reduce((prev, [key, value]: any) => {
            return {...prev, [value]: key};
        }, prev);
}


/**
 * 物件對應轉換
 * ex: {name: 'jack'} -> {name: 'id'}
 *
 * use:
 * const from = {name: 'jack'};
 * const to = autoMapper(from, {name: 'id'});
 *
 * @param obj 原物件
 * @param mapping 新物件Key Value對應表
 */
export function autoMapper<T = any>(obj: object, mapping: any): T {
    const prev = {} as any;
    return Object.entries(obj).reduce((prev, [key, value]) => {
        const newKey = mapping[key] || key;
        prev[newKey] = value;
        return prev;
    }, prev);
}


/**
 * Object.keys 型別增強
 * @param object
 */
export function objectKeys<T extends object>(object: T): Array<keyof T> {
    return Object.keys(object) as Array<keyof T>;
}

