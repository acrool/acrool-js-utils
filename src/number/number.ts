

/**
 * 保留小數第二位
 * @returns {string}
 * @param num
 * @param decimalPlaces
 */
export function numToDecimal2(num: number, decimalPlaces = 2): string {
    const str = Number(num).toString(); // 確保輸入是數字

    const splitStr = str.split('.');
    const integerPart = splitStr[0];
    let decimalPart = splitStr[1] ?? '';

    decimalPart = decimalPart
        .padEnd(decimalPlaces, '0')
        .slice(0, decimalPlaces);

    return `${integerPart}.${decimalPart}`;
}



/**
 * 千分位格式化
 * @param val 原數值
 * @param isDecimal2 保留小數2位
 */
export function formatCurrency(val = 0, isDecimal2 = false): string {
    const dec = isDecimal2 ? numToDecimal2(val) : Math.floor(val);
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

