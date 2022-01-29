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
