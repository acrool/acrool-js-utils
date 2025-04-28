



/**
 * 安全保留小數位（無條件捨去、不產生浮點誤差）
 * @param val 原始數值
 * @param decimalPlaces 保留幾位小數，預設為 0
 * @returns 字串格式的小數數值
 */
export function safeFormatDecimal(val: number | string = 0, decimalPlaces = 0): string {
    const safeVal = Number(val);
    if (isNaN(safeVal)) {
        return (0).toFixed(decimalPlaces);
    }

    const factor = Math.pow(10, decimalPlaces);
    const truncated = Math.trunc(safeVal * factor) / factor;

    return truncated.toFixed(decimalPlaces);
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

