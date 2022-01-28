/**
 * 文本中的每個單詞以大寫字母開頭
 * @param str
 * @returns {string}
 */
export function toCapitalize(str: string) {
    return str.replace(/\b(\w)/g, $1 => $1.toUpperCase());
}

/**
 * 語言代碼轉換 (en-us -> en-US)
 * @param str
 * @returns {string}
 */
export function lowerDashToLowerDashUpper(str: string) {
    // eslint-disable-next-line no-useless-escape
    const result = str.replace(/\-(.*)/g, $1 => $1.toUpperCase());

    // eslint-disable-next-line no-useless-escape
    return result.replace(/(.*)+\-/g, $1 => $1.toLowerCase());
}


/**
 * 大寫底線轉小駝峰
 * @param str
 */
export function upperLineToLowerCase(str: string) {
    // eslint-disable-next-line no-useless-escape
    return str.toLowerCase().replace(/\_(\w)/g, function(all, letter){
        return letter.toUpperCase();
    });
}


/**
 * 小駝峰轉大寫底線
 * @param str
 */
export function lowerCaseToUpLineCase(str: string): string {
    return str.replace(/([A-Z])/g,'_$1').toUpperCase();
}

/**
 * RGB轉16進位
 * @param rgb
 * @returns {*}
 */
export function RGBToHex(rgb: string) {
    const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    const hex = function (x: any) {
        // eslint-disable-next-line no-mixed-operators
        return Number.isNaN(x) ? '00' : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
    };
    const tmp: any = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return hex(tmp[1]) + hex(tmp[2]) + hex(tmp[3]);
}

/**
 * HEX(16進位)色碼轉轉RGB
 * @returns {*}
 * @param hexStr HEX字串
 * @param opacity 透明度 (提供透明度參數的話, 會轉回 RGBA)
 */
export function HEXToRGB(hexStr: string, opacity = 1) {
    hexStr = hexStr.replace('#', '');
    const defaultReturn = 'rgb(0, 0, 0)';
    let rbgStr = '';
    let regMatch: RegExpMatchArray|null;
    if (/^[0-9A-F]{3}$|^[0-9A-F]{6}$/.test(hexStr.toUpperCase())) {
        if (hexStr.length === 3) {
            regMatch = hexStr.match(/[0-9A-F]/g);
            if(!regMatch){
                return defaultReturn;
            }
            rbgStr = regMatch[0] + regMatch[0] + regMatch[1] + regMatch[1] + regMatch[2] + regMatch[2];
        }

        const r = parseInt(rbgStr.substr(0, 2), 16);
        const g = parseInt(rbgStr.substr(2, 2), 16);
        const b = parseInt(rbgStr.substr(4, 2), 16);

        if(opacity < 1){
            return `rgba(${[r, g, b, opacity].join()})`;
        }
        return `rgb(${[r, g, b].join()})`;

    }
    return defaultReturn;
}



/**
 * 數字補0方法
 * @param val 原字串
 * @param length 補滿的目標长度
 * @returns {*}
 */
export function paddingLeft(val: string|number, length: number): string {
    const replaceStr = String(val);
    if (replaceStr.length < length) {
        return paddingLeft(`0${replaceStr}`, length);
    }
    return replaceStr;
}

/**
 * 轉換外部Props資訊欄位與內部相同
 * @param obj 原物件
 * @param mapping 新物件Key Value
 * @returns {{}}
 */
export function autoMapper<A = object>(obj: object, mapping: object): A {
    /*
    範例:
        const obj1 = {
            firstName: 'Sam',
            lastName: 'Xiao',
            age: 20,
        };

        const obj2 = autoMapper(obj1, {
            firstName: 'realName',
            lastName: 'niceName',
        });
    */

    // @ts-ignore
    return Object.entries(obj).reduce((accm, [key, value]) => {accm[mapping[key] || key] = value;
        return accm;
    }, {});
}


/**
 * 反轉陣列
 * @param obj
 */
export function reverseObj(obj: {[key: string]: any}) {
    return Object.entries(obj)
        .reduce((prev, [key, value]) => {
            return {...prev, [value]: key};
        }, {});
}



/**
 * 將物件資料轉成 FormData
 * (若值為物件會被轉成JSON字串)
 * @param data
 */
export function obj2formData(data: {[key: string]: any}) {
    const formData = new FormData();

    const appendData = (whileData: {[key: string]: any}) => {
        for(const [key, value] of Object.entries(whileData)){

            if(Array.isArray(value)){
                for(const w of value){
                    appendData(
                        {[`${key}[]`] : w}
                    );
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


export function jsonTryParse<T = any>(jsonString: string): T|undefined{

    try {
        const obj = JSON.parse(jsonString);
        if (obj && typeof obj === 'object' && obj !== null) {
            return obj;
        }
    } catch (err) {}

    return undefined;
}

export function arrayTryJoin(arr: string[], separator: string): string{

    try {
        return arr.join(separator);
    } catch (err) {}

    return '';
}

export function stringTrySplit(str: string, separator: string): string[]{

    try {
        return str.split(separator);
    } catch (err) {}

    return [];
}


/**
 * 過去陣列中不等於True的值
 *
 * (用於Table Checkbox取ID)
 * @param checkedId
 */
export function objFilterNotTrue2Array(checkedId: {
    [key: string]: string| number|boolean| undefined
}) {
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
 * 合併陣列中相同的Value
 * @param data
 */
export function mergeArraySameValue(data: any[]) {
    // @ts-ignore
    return [...(new Set(data))];
}



/**
 * 檔案轉 Base64
 * ref: https://stackoverflow.com/questions/15960508/javascript-async-readasdataurl-multiple-files/17370825
 * @param file
 */
export function fileConvertBase64(file: File): Promise<string|undefined>{
    const reader = new FileReader();
    return new Promise(resolve => {
        reader.onload = ev => {
            // @ts-ignore
            resolve(ev.target.result);
        };
        reader.readAsDataURL(file);
    });
}

/**
 * 轉數字
 * @param value
 */
export function toNumber(value: any) {
    const reg = new RegExp(/^\d+$/);
    if(reg.test(value)){
        return Number(value);
    }

    return undefined;
}

/**
 * 轉布林
 * @param value
 * @param checkOption
 */
export function toBoolean(value: any, checkOption?: {isNotBooleanToUndefined?: boolean}) {

    const defaultCheckOption = {
        isNotBooleanToUndefined: checkOption?.isNotBooleanToUndefined ?? true,
    };

    if(value === 'true' || value === true || value === 1) {
        return true;

    }else if(value === 'false' || value === 0 || value === false){
        return false;

    }else if(defaultCheckOption.isNotBooleanToUndefined === true){
        return undefined;
    }

    return false;
}

export default toBoolean;
