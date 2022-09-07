import {regPattern} from './equal';


/**
 * Obj 轉 QueryString
 * ex: {keyword: 'jack', sex: 'F'} -> ?keyword=jack&sex=F
 *
 * @param queryObj key value 物件
 */
export function encodeQueryString(queryObj: {
    [key: string]: string|number|boolean
} = {}): string {
    const queryStringList: string[] = [];


    Object.keys(queryObj).forEach(key => {
        const value = queryObj[key];
        queryStringList.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    });
    if(queryStringList.length > 0){
        return `${queryStringList.join('&')}`;
    }
    return '';
}

/**
 * 解析 Search QueryString 轉成 物件
 * ex: ?keyword=jack&sex=F -> {keyword: 'jack', sex: 'F'}
 *
 * @param val QueryString 字串
 */
export function decodeQueryString<T>(val = ''): T|undefined {
    const pairs = decodeURIComponent(val).replace(/^.*\?/, '').split('&');
    const obj: any = {};

    if (pairs[0] !== '') {
        pairs.forEach(o => {
            const p = o.split('=');
            if(p[1]){
                obj[p[0]] = p[1];
            }
        });
        return Object.keys(obj).length > 0 ? obj : undefined;
    }
    return undefined;
}


/**
 * 取得網域
 * 若非正確網址
 * @param url
 */
export function getProtocolDomain(url: string): string {
    if (url) {
        // 域名
        const reg = new RegExp(regPattern.protocolDomain);
        const result = reg.exec(url);
        if(result !== null){
            return result[0];
        }
    }
    return '';
}

/**
 * 取得主網域(二級域名)
 * 若非正確網址, 例如是IP位置就會回傳空白
 * @param hostName
 */
export function getMainDomain(hostName: string): string {
    const regexParse = new RegExp(regPattern.domain);
    const urlParts = regexParse.exec(hostName);
    if (urlParts && urlParts[0]) {
        const domainArray = urlParts[0].split('.');
        if(domainArray.length === 2){
            return urlParts[0];
        }else if(domainArray.length === 3){
            return [domainArray[1],domainArray[2]].join('.');
        }
    }
    return '';
}

/**
 * 取得子網域(最後一段)
 * 若非正確網址, 例如是IP位置就會回傳空白
 * @param hostName
 */
export function getSubDomain(hostName: string): string {
    const regexParse = new RegExp(regPattern.domain);
    const urlParts = regexParse.exec(hostName);
    if (urlParts && urlParts[0]) {
        const domainArray = urlParts[0].split('.');
        if(domainArray.length === 3){
            return domainArray[0];
        }
    }
    return '';

}



function normalize (strArray: string[]) {
    const resultArray = [];
    if (strArray.length === 0) { return ''; }

    if (typeof strArray[0] !== 'string') {
        throw new TypeError('Url must be a string. Received ' + strArray[0]);
    }

    // If the first part is a plain protocol, we combine it with the next part.
    if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
        strArray[0] = strArray.shift() + strArray[0];
    }

    // There must be two or three slashes in the file protocol, two slashes in anything else.
    if (strArray[0].match(/^file:\/\/\//)) {
        strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1:///');
    } else {
        strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1://');
    }

    for (let i = 0; i < strArray.length; i++) {
        let component = strArray[i];

        if (typeof component !== 'string') {
            throw new TypeError('Url must be a string. Received ' + component);
        }

        if (component === '') { continue; }

        if (i > 0) {
            // Removing the starting slashes for each component but the first.
            component = component.replace(/^[\/]+/, '');
        }
        if (i < strArray.length - 1) {
            // Removing the ending slashes for each component but the last.
            component = component.replace(/[\/]+$/, '');
        } else {
            // For the last component we will combine multiple slashes to a single one.
            component = component.replace(/[\/]+$/, '/');
        }

        resultArray.push(component);

    }

    let str = resultArray.join('/');
    // Each input component is now separated by a single slash except the possible first plain protocol part.

    // remove trailing slash before parameters or hash
    str = str.replace(/\/(\?|&|#[^!])/g, '$1');

    // replace ? in parameters with &
    const parts = str.split('?');
    str = parts.shift() + (parts.length > 0 ? '?': '') + parts.join('&');

    return str;
}

export function urlJoin(...args: string[]|string[][]) {
    // @ts-ignore
    const parts = Array.from(Array.isArray(args[0]) ? args[0] : args);
    return normalize(parts);
}