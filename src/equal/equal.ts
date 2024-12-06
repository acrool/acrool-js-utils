import regPattern from '../regPattern';
import {Empty, TObjsComposeByKey, TObjsComposeById, TObjsComposeByCode} from './types';




/**
 * 判断是否为空
 * @param value
 * @param checkOption
 * @returns {boolean}
 */
export function isEmpty<T>(value: T, checkOption?: {
    isZero?: boolean,
    isFalse?: boolean,
}): value is Extract<T, Empty> {
    const defaultCheckOption = {
        isZero: checkOption?.isZero ?? true,
        isFalse: checkOption?.isFalse ?? true,
    };
    return (
        value === undefined
        || value === null
        || (defaultCheckOption.isFalse && (value === false || value === 'false'))
        || (defaultCheckOption.isZero && (value === 0 || value === '0'))
        || (!(value instanceof Date) && typeof value === 'object' && Object.keys(value).length === 0)
        || (typeof value === 'string' && value.trim().length === 0)
    );
}




/**
 * 判定是否不為空
 * @param value
 * @param checkOption
 * @returns {boolean}
 */
export function isNotEmpty<T>(value: T, checkOption?: {
    isZero?: boolean,
    isFalse?: boolean,
}): value is Exclude<T, Empty> {
    const defaultCheckOption = {
        isZero: checkOption?.isZero ?? true,
        isFalse: checkOption?.isFalse ?? true,
    };
    return !isEmpty(value, defaultCheckOption);
}


/**
 * 驗證日期格式為 YYYY-MM-DD
 * @param str
 * @returns {boolean}
 */
export function isDate(str: string): boolean {
    const re = new RegExp(regPattern.date);
    let infoValidation = true;

    const strDataValue = re.exec(str);
    if (strDataValue !== null) {
        let i;
        i = parseFloat(strDataValue[1]);
        if (i <= 0 || i > 9999) {
            /* 年 */
            infoValidation = false;
        }
        i = parseFloat(strDataValue[2]);
        if (i <= 0 || i > 12) {
            /* 月 */
            infoValidation = false;
        }
        i = parseFloat(strDataValue[3]);
        if (i <= 0 || i > 31) {
            /* 日 */
            infoValidation = false;
        }
    } else {
        infoValidation = false;
    }
    return infoValidation;
}

/**
 * 判斷是否為數字
 * @returns {boolean}
 * @param value
 */
export function isNumber<T>(value: T): value is Extract<T, number> {
    if(value === null){
        return false;
    }
    if(value === ''){
        return false;
    }
    return !isNaN(value as any);
}

/**
 * 判斷是否為IP
 * @param ip
 * @returns {boolean}
 */
export function isIP(ip: string): boolean {
    const reg = new RegExp(regPattern.ipAddress);
    // @ts-ignore
    if (reg.test(ip) && RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256) {
        return true;
    }
    return false;
}

/**
 * 判斷是否為IP網址
 * @param ip
 * @returns {boolean}
 */
export function isIPUrl(ip: string): boolean {
    const reg = new RegExp(/(\d+)\.(\d+)\.(\d+)\.(\d+)/g);
    // @ts-ignore
    if (reg.test(ip) && RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256) {
        return true;
    }
    return false;
}


/**
 * 判斷是否為JSON
 * @param jsonString string
 */
export function isJSON(jsonString: string): boolean {
    try {
        const obj = JSON.parse(jsonString);
        if (obj && typeof obj === 'object' && obj !== null) {
            return true;
        }
    } catch (err) {
        return false;
    }
    return false;
}


/**
 * @param keyColumn
 */
export const objsComposeBy: TObjsComposeByKey = (keyColumn) => {
    return (prev, next) => {
        const prevKeys = prev?.map(row => row[keyColumn]).join('-');
        const nextKeys = next?.map(row => row[keyColumn]).join('-');
        return prevKeys === nextKeys;
    };
};

export const objsComposeById: TObjsComposeById = objsComposeBy('id');

export const objsComposeByCode: TObjsComposeByCode = objsComposeBy('code');


/**
 * 比對 array (不考慮順序)
 * @param arr1
 * @param arr2
 */
export function arrayCompose<T>(arr1: T[], arr2: T[]): boolean {
    if (arr1.length !== arr2.length) return false;

    const frequencyMap = new Map<T, number>();

    for (const value of arr1) {
        frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
    }

    for (const value of arr2) {
        if (!frequencyMap.has(value)) return false;
        const count = frequencyMap.get(value)! - 1;
        if (count === 0) {
            frequencyMap.delete(value);
        } else {
            frequencyMap.set(value, count);
        }
    }

    return frequencyMap.size === 0;
}
