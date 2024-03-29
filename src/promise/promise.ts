
/**
 * 延遲
 * @param ms 毫秒
 */
export function delay(ms: number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, ms);
    });
}


