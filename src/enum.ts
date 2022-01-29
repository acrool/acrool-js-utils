/**
 * Enum `物件(KeyVal)使用Value查Key
 *
 * ex:
 * enum categoryIdMapping {my = '1', you = '2', he = '3', she = '4'}
 * get 1 -> my
 *
 * @param obj
 * @param findValue
 */
export function enumFindKey(obj: {[key: string]: any}, findValue: string) {
    if(obj){
        for (const key in obj) {
            if (obj[key] === findValue) {
                return key;
            }
        }
    }

    return undefined;
}


