import {ulid} from 'ulid';
import {checkIsIOS, checkIsWebview} from './browser';
import logger from './logger';

/**
 * 開啟視窗功能
 * mobile
 *  > ios safari      : 當有非同步發生時, 不可以接著 window.open, 會被 safari 認定不安全而錯誤
 *                      所以需要新開一個 about:black 視窗 (命名ID), 在導頁到目標ID。
 *  > android: chrome : 因配合 ios safari 的情況, 所以直接使用 ios safari 方案避免相同性問題。
 *
 * PS: 開啟的子視窗, 需注意跨域問題, 若開啟的網域與父視窗不同, 則無法再控制(包含覆蓋原本的視窗)
 *
 * @param prefixName     命名前輟ID名稱
 * @param isMultipleOpen 是否需要可以多開子視窗
 * @returns {boolean}
 */
export default class Launcher {
    _openTargetId: string;
    _isMultipleOpen = false;
    _isSelfOpen = false;
    _isWebview = false;
    _isIOS = false;
    _targetWindow: any;
    _readyUrl?: string;
    _closeNoticeUrl?: string;
    _prefixName?: string;

    constructor(prefixName: string, options?: {openMode?: 'multiple'|'self', readyUrl?: string, closeNoticeUrl?: string}) {
        this._prefixName = prefixName;
        this._isMultipleOpen = options?.openMode === 'multiple';
        this._isSelfOpen = options?.openMode === 'self';

        this._openTargetId = this._createOpenTargetId();
        this._targetWindow = null;

        this._isWebview = checkIsWebview();
        this._isIOS = checkIsIOS();
        this._readyUrl = options?.readyUrl ?? 'about:blank';
        this._closeNoticeUrl = options?.closeNoticeUrl ?? 'about:blank';

    }

    _createOpenTargetId(){
        return `${this._prefixName}_${ulid()}`;
    }

    /**
     * 準備開啟視窗的前置作業
     */
    ready(){
        // Webview 不做任何準備
        if(this._isWebview || this._isSelfOpen){
            return;
        }

        if(this._isIOS && this._targetWindow) {
            // iOS Safari 先切換到 關閉提示頁面, 在開啟新的準備視窗
            this._targetWindow.location.href = this._closeNoticeUrl;
            this._openTargetId = this._createOpenTargetId();
            this._targetWindow = window.open(this._readyUrl, this._openTargetId);
            return;
        }

        if(this._isMultipleOpen){
            // 多開模式需要使用不同ID
            this._openTargetId = this._createOpenTargetId();
            this._targetWindow = window.open(this._readyUrl, this._openTargetId);
            return;
        }
    }

    /**
     * 開啟視窗
     * @param url 開啟目標的Url
     */
    open(url: string){
        if(this._isSelfOpen){
            window.open(url, '_self');
        }

        if(this._isWebview){
            logger.printInText(`launch open: ${url}`, false);
            window.open(url);
            return;
        }

        // 單一顯示模式中, 如果子視窗未關閉, 則使用子視窗導頁
        if(!this._isMultipleOpen && this._targetWindow){
            this._targetWindow.location.href = url;
            return;
        }

        window.open(url, this._openTargetId);
    }

    /**
     * 關閉視窗
     */
    close() {
        try{
            this._targetWindow.close();

        }catch (e) {
            console.log('open-window: window close error');
        }
    }

}
