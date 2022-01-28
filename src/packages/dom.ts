/**
 * 判斷 elements 中的 css class
 * @param dom elements
 * @param className css class
 * @returns {boolean}
 */
export function hasClass(dom: any, className: string) {
    return !!dom.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
}

/**
 * 在 elements 中新增 css class
 * @param dom elements
 * @param className
 */
export function addClass(dom: any, className: string) {
    if (!hasClass(dom, className)) {
        dom.classList.add(className);
    }
    return false;

}

/**
 * 刪除 elements 中的 css class
 * @param dom elements
 * @param className
 */
export function removeClass(dom: any, className: string) {
    dom.classList.remove(className);
    return false;
}

/**
 * 插入IFrame
 * 是否事後刪除由 callback 處理
 * @param frameId 識別ID
 * @param url 網址
 * @param callBack 回乎方法
 */
export function insertIFrame(frameId: string, url: string, callBack: (element: HTMLIFrameElement)=> void) {
    // 插入測速工具
    if (document.getElementById(frameId) === null) {
        const i = document.createElement('iframe');

        i.id = frameId;
        i.src = url;
        i.scrolling = 'no';
        // @ts-ignore
        i.frameborder = '0';
        // @ts-ignore
        i.width = 0;
        // @ts-ignore
        i.height = 0;
        i.onload = () => {
            // callBack
            if (callBack) {
                callBack(i);
            }
        };

        // add iFrame
        document.body.appendChild(i);
    }
    return false;
}

/**
 * 複製字串到剪貼簿
 */
export const copyToClipboard = (
    value: string,
    callBack?: () => void,
) => {
    const textField = document.createElement('textarea');
    textField.innerText = value;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();

    if(callBack){
        callBack();
    }
};
