import {ulid} from 'ulid';
import {checkIsWebview, checkIsIOS, checkIsSafariBrowser} from '../browser';
import {IBrowser} from './types';
import {Safari, Chrome} from './safari';


const getBrowser = () => {
    if(checkIsSafariBrowser()) return Safari;
    // if(checkIsSafariBrowser()) return Firefox;
    // if(checkIsSafariBrowser()) return AndroidWebview;
    // if(checkIsSafariBrowser()) return IOSWebview;

    return Chrome;
};


interface IOptions {
    openMode?: TOpenMode
    readyUrl?: string // 指定一個暫時開啟的頁面路徑，避免白頁
}
type TOpenMode = 'blank'|'multiple'|'self';

export default class Launcher {
    _browser: IBrowser;
    _prefixName?: string;
    _openTargetId?: string;
    _targetWindow: any;

    constructor(prefixName: string, options?: IOptions) {
        this._openTargetId = this._createOpenTargetId();
        this._browser = new (getBrowser());
    }

    /**
     * 建立目標視窗ID
     */
    _createOpenTargetId(){
        return `${this._prefixName}_${ulid()}`;
    }

    ready(){
        this._browser.ready();
    }

    open(){
        this._browser.open();
    }

    close(){
        this._browser.close();
    }
}
