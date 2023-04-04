import regPattern from './regPattern';

/**
 * 判定是否為空
 * @param value
 * @param checkOption
 * @returns {boolean}
 */
export function isEmpty(value: any, checkOption?: {
    isZero?: boolean,
    isFalse?: boolean,
}): boolean {
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
export function isNotEmpty(value: any, checkOption?: {
    isZero?: boolean,
    isFalse?: boolean,
}): boolean {
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




type TObjsComposeByKey<P = any> = (keyColumn: string|number, prev: P[], next: P[]) => boolean;
/**
 * @param keyColumn
 * @param prev
 * @param next
 */
const objsComposeByKey: TObjsComposeByKey = (keyColumn, prev, next) => {
    const prevKeys = prev?.map(row => row[keyColumn]).join('-');
    const nextKeys = next?.map(row => row[keyColumn]).join('-');
    return prevKeys === nextKeys;
};

type TObjsComposeById = <P>(prev: Record<'id', P>[]|undefined, next: Record<'id', P>[]|undefined) => boolean;
export const objsComposeById: TObjsComposeById = (prev, next) => objsComposeByKey('id', prev, next);

type TObjsComposeByCode = <P>(prev: Record<'code', P>[]|undefined, next: Record<'code', P>[]|undefined) => boolean;
export const objsComposeByCode: TObjsComposeByCode = (prev, next) => objsComposeByKey('code', prev, next);
