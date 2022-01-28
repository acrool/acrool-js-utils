
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
export function isDate(str: string) {
    const re = new RegExp('^([0-9]{4})[/.-]{1}([0-9]{1,2})[/.-]{1}([0-9]{1,2})$');
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
export function isIp(ip: string) {
    const reg = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
    // @ts-ignore
    if (reg.test(ip) && RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256) {
        return true;
    }
    return false;
}

/**
 * 判斷是否為JSON
 * @param jsonString string
 * @returns {boolean}
 */
export function isJSON(jsonString: string) {
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
