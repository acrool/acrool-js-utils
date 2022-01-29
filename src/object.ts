
/**
 * 過濾物件keyValue中, 將等於true的收集為陣列
 * ex: {_1: false, _2: true} -> [2]
 *
 * hookForm getValues
 * @param checkedId
 */
export function getTrueKey(checkedId: {
    [key: string]: string| number|boolean| undefined
}): number[] {
    const ids = [];
    for(const id in checkedId){
        // 過濾掉不等於 true 的 Key
        if(checkedId[id]){
            ids.push(Number(id.replace('_','')));
        }
    }
    return ids;
}



/**
 * 將物件資料轉成 FormData (最多兩層)
 * ex: {
 *     profile: {name: 'jack'}
 * }
 *
 * @param data
 */
export function objToFormData(data: {[key: string]: any}): FormData {
    const formData = new FormData() as any;

    const appendData = (whileData: any) => {
        for(const [key, value] of Object.entries(whileData)){
            if(Array.isArray(value)){
                let i = 0;
                for(const w of value){
                    if(typeof w === 'object'){
                        for(const [objKey, objVal] of Object.entries(w)){
                            // @ts-ignore
                            formData.append(`${key}[${i}][${objKey}]`, objVal);
                        }
                    }else{
                        formData.append(`${key}[${i}]`, w);
                    }
                    i += 1;
                }
            }else if(typeof value !== 'undefined' && value !== null){
                // @ts-ignore
                formData.append(key, value);
            }
        }
    };

    appendData(data);
    return formData;
}



/**
 * 反轉物件
 * ex: {'name': 'jack'} -> {jack: 'name'}
 *
 * use: reverseObj({'name': 'jack'})
 * @param obj
 */
export function reverseObj<T = any>(obj: {[key: string]: any}): T {
    let prev = {} as any;
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
    let prev = {} as any;
    return Object.entries(obj).reduce((prev, [key, value]) => {
        const newKey = mapping[key] || key;
        prev[newKey] = value;
        return prev;
    }, prev);
}

