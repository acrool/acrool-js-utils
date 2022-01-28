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
        return `?${queryStringList.join('&')}`;
    }
    return ''
}

/**
 * 解析 Search QueryString 轉成 物件
 * ex: ?keyword=jack&sex=F -> {keyword: 'jack', sex: 'F'}
 *
 * @param val QueryString 字串
 */
export function decodeQueryString<T>(val = ''): T|undefined {
    const pairs = val.replace(/^.*\?/, '').split('&');
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

