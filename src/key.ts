/**
 * 產生UUID
 * @private
 */
import {paddingLeft} from './string';

/**
 * 產生36位UUID字串
 * @param prefix
 */
export function uuid(prefix = ''): string {
    let d = Date.now();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    const key = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

    return `${prefix}${key}`;
}

/**
 * 產生15位數日期時間(不含西元年前兩碼)
 */
export function timeKey(prefix = ''): string {
    const d = new Date();
    const year = d.getFullYear().toString().substr(2,2);
    const month = paddingLeft(d.getMonth() + 1, 2);
    const day = paddingLeft(d.getDay(), 2);
    const hours = paddingLeft(d.getHours(), 2);
    const minutes = paddingLeft(d.getMinutes(), 2);
    const seconds = paddingLeft(d.getSeconds(), 2);
    const milliseconds = paddingLeft(d.getMilliseconds(), 2);

    const key = [year, month, day, hours, minutes, seconds, milliseconds].join('');
    return `${prefix}${key}`;
}
