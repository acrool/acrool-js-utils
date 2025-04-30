import Big from 'big.js';

/**
 * 安全保留小數位（無條件捨去、不產生浮點誤差）
 * @param val 原始數值
 * @param decimalPlaces 保留幾位小數，預設為 0
 * @returns 字串格式的小數數值
 */
export function safeFormatDecimal(val: number | string = 0, decimalPlaces = 0): string {
    try {
        const d = new Big(val);
        const truncated = d.round(decimalPlaces, 0); // 0 = ROUND_DOWN
        return truncated.toFixed(decimalPlaces);
    } catch {
        return new Big(0).toFixed(decimalPlaces);
    }
}



/**
 * 千分位格式化
 * @param val 原數值
 * @param decimalPlaces
 */
export function formatCurrency(val = 0, decimalPlaces = 0): string {
    const dec = safeFormatDecimal(val, decimalPlaces);
    const parts = dec.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}



/**
 * 取得數組中的交集最小範圍
 * obj = [
 *    [1, 20],
 *    [5, 24]
 * ]
 *
 * result = {min: 5, max: 20}
 * @param arrayNumber
 */
export function intersectionMin(arrayNumber: Array<[number, number]>): {min: number, max: number} {
    let min: number|undefined;
    let max: number|undefined;

    arrayNumber.forEach((row) => {
        min = min ? (row[0] > min ? row[0] : min) : row[0];
        max = max ? (row[1] < max ? row[1] : max) : row[1];
    });

    return {min: min ?? 0, max: max ?? 0};
}


/**
 * 安全地移除数字字符串中的前导零
 * @param str 要处理的字符串
 * @returns 处理后的字符串
 */
export function removeLeadingZero(str: string) {
    // 检查是否为小数（以0开头）
    if (/^0\.\d+$/.test(str)) {
        return str.replace(/^0/, '');
    }
    // 检查是否为其他数字字符串（可能包含小数点）
    if (/^\d*\.?\d+$/.test(str)) {
        return str.replace(/^0+(?=\d)/, '');
    }
    return str;
}
