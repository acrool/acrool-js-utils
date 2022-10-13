import {addClass, hasClass, removeClass} from './dom';
import log from './log';

declare global {
    /*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */
    interface Window {
        disableBodyModalCount: number
    }
}

window.disableBodyModalCount = 0;

/**
 * 需加上 model-open 樣式
 *
 * body.modal-open{
 *   position: fixed;
 *   top: 0;
 *   right: 0;
 *   bottom: 0;
 *   left: 0;
 *   overflow: hidden;
 *   overscroll-behavior-x: contain; // chrome 滑動上一頁下一頁
 * }
 */
export function disableBodyScroll(printLog = false){
    const count = window.disableBodyModalCount;
    if(count >= 0){
        window.disableBodyModalCount += 1;
        log.printInText(`[disableBodyScroll] count: ${count} -> ${window.disableBodyModalCount}`, printLog);

        if(!hasClass(document.body, 'modal-open')){
            addClass(document.body, 'modal-open');
            log.printInText('[disableBodyScroll] run!', printLog);
        }
    }

}

export function enableBodyScroll(printLog = false){
    const count = window.disableBodyModalCount;
    if(count > 0){
        window.disableBodyModalCount -= 1;
        log.printInText(`[enableBodyScroll] count: ${count} -> ${window.disableBodyModalCount}`, printLog);

        if(window.disableBodyModalCount === 0){
            removeClass(document.body, 'modal-open');
            log.printInText('[enableBodyScroll] run!', printLog);
        }
    }

}
