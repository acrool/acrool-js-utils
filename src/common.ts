

/**
 * 依需求位數補0
 * ex: 69 -> 0069
 *
 * @param val 需要轉換得字串|數字
 * @param length 補滿長度
 */
export function paddingLeft(val: string|number, length: number): string {
    const replaceStr = String(val);
    if (replaceStr.length < length) {
        return paddingLeft(`0${replaceStr}`, length);
    }
    return replaceStr;
}
