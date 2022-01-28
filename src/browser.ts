
/**
 * 判斷是否為手機裝置
 */
export function checkIsMobile(): boolean {
    try { document.createEvent('TouchEvent'); return true; } catch (e) { return false; }
}

/**
 * 判斷是否為IOS
 */
export function checkIsIOS(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
}

/**
 * 判斷是否為IE瀏覽器
 */
export function checkIsIE(): boolean {
    return (!!window.ActiveXObject || 'ActiveXObject' in window);
}

/**
 * 判斷是否為LINE瀏覽器
 */
export function checkIsLine(): boolean {
    const u = navigator.userAgent;
    return u.includes('Line');
}

/**
 * 判斷是否為FB瀏覽器
 */
export function checkIsFacebook(): boolean {
    const u = navigator.userAgent;
    return u.includes('FBAV');
}

/**
 * 判斷是否為微信瀏覽器
 */
export function checkIsWechat(): boolean {
    const ua = navigator.userAgent.toLowerCase();
    // @ts-ignore
    return ua.match(/MicroMessenger/i) === 'micromessenger';
}

/**
 * 判斷是否為Safari
 */
export function checkIsSafari(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return userAgent.includes('safari') && !userAgent.includes('chrome');
}

/**
 * 判斷是否為PWA模式
 */
export function checkIsPWA(): boolean {
    // @ts-ignore
    return ('standalone' in window.navigator) && (window.navigator.standalone);
}


/**
 * 判斷是否為Webview模式
 * (自行開發的 App webview, 需要 APP端傳 userAgent 進webview)
 */
export function checkIsWebview() {
    const regex = /(WebView|(iPhone|iPod|iPad)(?!.*WebKit\/)|Android.*(wv|.0.0.0))/gi;
    return Boolean(navigator.userAgent.match(regex));
}

/**
 * 取得捲軸的總高度
 */
export function getScrollHeight(): number {
    let scrollHeight = 0; let bodyScrollHeight = 0; let
        documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}

/**
 * 取得瀏覽器顯示的高度
 */
export function getWindowHeight(): number {
    let windowHeight = 0;
    if (document.compatMode === 'CSS1Compat') {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

