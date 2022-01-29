/**
 * 產生UUID
 * @private
 */
export function uuid(): string {
    let d = Date.now();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

/**
 * 產生 12位數日期時間不含西元年前兩碼
 */
export function timeKey(): string {
    const d = new Date();
    const year = d.getFullYear().toString().substr(2,2);
    const month = d.getMonth();
    const day = d.getDay();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const milliseconds = d.getMilliseconds();

    return [year, month, day, hours, minutes, seconds, milliseconds].join('');
}
