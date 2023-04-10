
/**
 * 判斷 elements 中的 css class
 * @param dom elements
 * @param className css class
 * @returns {boolean}
 */
export function hasClass(dom: any, className: string): boolean {
    return !!dom.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
}

/**
 * 在 elements 中新增 css class
 * @param dom elements
 * @param className
 */
export function addClass(dom: any, className: string):void {
    if (!hasClass(dom, className)) {
        dom.classList.add(className);
    }
}

/**
 * 刪除 elements 中的 css class
 * @param dom elements
 * @param className
 */
export function removeClass(dom: any, className: string):void {
    dom.classList.remove(className);
}

/**
 * 插入IFrame
 * 是否事後刪除由 callback 處理
 * @param frameId 識別ID
 * @param url 網址
 * @param callBack 回乎方法
 */
export function insertIFrame(frameId: string, url: string, callBack?: (element: HTMLIFrameElement)=> void):void {
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
}


/**
 * 插入Script
 * @param scriptId
 * @param scriptContent
 */
export function insertScriptContent(scriptId: string, scriptContent: string): void {
    // 插入測速工具
    if (document.getElementById(scriptId) === null) {
        const s = document.createElement('script');

        s.id = scriptId;
        s.append(scriptContent);

        // add script
        document.head.appendChild(s);
    }
}



/**
 * 插入Script
 * @param scriptId
 * @param scriptUrl
 * @param callBack
 */
export function insertScriptSrc(scriptId: string, scriptUrl: string, callBack?: () => void) {
    // 插入測速工具
    if (document.getElementById(scriptId) === null) {
        const s = document.createElement('script');

        s.id = scriptId;
        s.src = scriptUrl;

        if(callBack){
            s.onload = callBack;
        }

        // add script
        document.head.appendChild(s);
    }
    return false;
}


/**
 * 複製字串到剪貼簿
 * @param value 要複製的內容
 * @param options
 */
export const copyToClipboard = (
    value: string,
    options?: {
        isNewLine?: boolean,
        callBack?: () => void,
    }
):void => {
    const textField = document.createElement('textarea');

    if(options?.isNewLine){
        // 包含換行
        textField.value = value;
    }else{
        textField.innerText = value;
    }

    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();

    if(options?.callBack){
        options.callBack();
    }
};





/**
 * 下載 Blob
 * @param blob
 * @param fileName
 */
export const downloadBlob = (blob: Blob, fileName: string): void =>  {
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
};



/**
 * 取得適合的顯示位置
 * @param el
 */
export const getVisiblePosition = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const top = rect.top;
    const bottom = window.innerHeight - top;
    return bottom > top ? 'bottom': 'top';
};


/**
 * 觸發瀏覽器下載Blob檔案
 * @param blob
 * @param fileName
 */
export const saveBlob = (blob: Blob, fileName: string): void =>  {
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
};
