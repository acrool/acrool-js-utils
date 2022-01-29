/**
 * 文本中的每個單詞以大寫字母開頭
 * ex: helloWorld -> HelloWorld
 *
 * @param str 需要轉換的字串
 */
export function toCapitalize(str: string): string {
    return str.replace(/\b(\w)/g, $1 => $1.toUpperCase());
}


/**
 * 大寫底線轉小駝峰
 * ex: Hello_World -> helloWorld
 *
 * @param str 需要轉換的字串
 */
export function upperLineToLowerCase(str: string): string {
    return str.toLowerCase().replace(/\_(\w)/g, function(all, letter){
        return letter.toUpperCase();
    });
}


/**
 * 語言代碼格式轉換
 * ex: en-us -> en-US
 *
 * @param localeCode 需要轉換的字串
 */
export function lowerLocaleToISOCode(localeCode: string): string {
    const result = localeCode.replace(/\-(.*)/g, $1 => $1.toUpperCase());
    return result.replace(/(.*)+\-/g, $1 => $1.toLowerCase());
}



/**
 * 小駝峰轉大寫底線
 * ex: helloWorld -> HELLO_WORLD
 *
 * @param str 需要轉換的字串
 */
export function lowerCaseToUpLineCase(str: string): string {
    return str.replace(/([A-Z])/g,'_$1').toUpperCase();
}

/**
 * RGB轉HEX(16進位)色碼
 * ex: rbg(0,0,0) -> #000000
 *
 * @param rgbStr RGB字串
 */
export function rgbToHex(rgbStr: string): string|undefined {
    const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    const hex = function (x: any) {
        return Number.isNaN(x) ? '00' : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
    };
    const tmp = rgbStr.toLowerCase().match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if(tmp!== null && tmp.length > 3){
        return ['#', hex(tmp[1]) + hex(tmp[2]) + hex(tmp[3])].join('');
    }
    return undefined;
}

/**
 * HEX(16進位)色碼轉轉RGB
 * ex: #000000 -> rgb(0,0,0)

 * @param hexStr HEX字串
 * @param opacity 透明度 (提供透明度參數的話, 會轉回 RGBA)
 */
export function hexToRGB(hexStr: string, opacity = 1): string|undefined {
    let newHexStr = hexStr.replace('#', '');
    const defaultReturn = undefined;
    let rbgStr = '';
    let regMatch: RegExpMatchArray|null;
    if (/^[0-9A-F]{3}$|^[0-9A-F]{6}$/.test(newHexStr.toUpperCase())) {
        if (newHexStr.length === 3) {
            regMatch = newHexStr.match(/[0-9A-F]/g);
            if(!regMatch){
                return defaultReturn;
            }
            newHexStr = regMatch[0] + regMatch[0] + regMatch[1] + regMatch[1] + regMatch[2] + regMatch[2];
        }

        const r = parseInt(newHexStr.substr(0, 2), 16);
        const g = parseInt(newHexStr.substr(2, 2), 16);
        const b = parseInt(newHexStr.substr(4, 2), 16);

        if(opacity < 1){
            const opacityStr = opacity.toString().replace('0.','.');
            return `rgba(${[r, g, b, opacityStr].join()})`;
        }
        return `rgb(${[r, g, b].join()})`;

    }
    return defaultReturn;
}



/**
 * 依需求位數補0
 * ex: 69 -> 0069
 *
 * @param val 需要轉換得字串|數字
 * @param length 補滿長度
 */
export function paddingLeft(val: string|number, length: number): string {
    const replaceStr = String(val);
    if (replaceStr.length < length) {
        return paddingLeft(`0${replaceStr}`, length);
    }
    return replaceStr;
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


/**
 * 反轉陣列
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
 * Json Decode
 * ex: {'name':'jack"} -> {
 *     name: 'jack'
 * }
 *
 * @param jsonString
 */
export function jsonDecode<T = any>(jsonString: string): T|undefined{
    try {
        const obj = JSON.parse(jsonString);
        if (obj && typeof obj === 'object' && obj !== null) {
            return obj;
        }
    } catch (err) {}

    return undefined;
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
 * 字串分割 (發生例外錯誤回傳 空陣列)
 *
 * @param str
 * @param separator
 */
export function stringSplit(str: string, separator: string): string[]{

    try {
        return str.split(separator);
    } catch (err) {}

    return [];
}


/**
 * 過濾物件keyValue中, 將等於true的收集為陣列
 * ex: {_1: false, _2: true} -> [2]
 *
 * hookForm getValues
 * @param checkedId
 */
export function objFilterNotTrue2Array(checkedId: {
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
 * 合併陣列中相同的值
 * ex: ['a', 'a', 'c'] -> ['a','c']
 *
 * @param data
 */
export function arrayFilterSameValue(data: any[]): any[] {
    return [...(new Set(data))];
}



/**
 * File 轉 Base64Str
 *
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
 * ex: asd1234 -> 1234
 *
 * @param value
 */
export function toNumber(value: any): number {
    const reg = new RegExp(/^\d+$/);
    if(reg.test(value)){
        return Number(value);
    }

    return 0;
}

/**
 * 轉布林
 * ex: 'true' => true
 *
 * @param value
 * @param isNotBooleanToUndefined
 */
export function toBoolean(value: any, isNotBooleanToUndefined = true): boolean|undefined {
    if(value === 'true' || value === true || value === 1) {
        return true;

    }else if(value === 'false' || value === 0 || value === false){
        return false;

    }else if(isNotBooleanToUndefined){
        return undefined;
    }

    return false;
}



/**
 * 保留小數第二位
 * @returns {string}
 * @param x
 */
export function toDecimal2(x: any): number {
    let f = parseFloat(x);
    if (Number.isNaN(f)) {
        return 0;
    }
    f = Math.floor(x * 100) / 100;
    let s = f.toString();
    let rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 2) {
        s += '0';
    }
    return Number(s);
}


/**
 * 千分位格式化
 * @param val 原數值
 * @param isDecimal2 保留小數2位
 */
export function formatCurrency(val = 0, isDecimal2 = false): string {
    const dec = isDecimal2 ? toDecimal2(val) : Math.floor(val);
    const parts = dec.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}
