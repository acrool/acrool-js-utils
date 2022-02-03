import {addClass, removeClass} from './dom';
import log from './log';

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
 * }
 */
export function disableBodyScroll(printLog = false){
    log.printInText(`disableBodyScroll ${window.disableBodyModalCount}`, printLog);

    if(window.disableBodyModalCount === 0){
        addClass(document.body, 'modal-open');
        log.printInText('disableBodyScroll run!', false);
    }
    window.disableBodyModalCount += 1;
}

export function enableBodyScroll(printLog = false){
    window.disableBodyModalCount -= 1;
    log.printInText(`enableBodyScroll ${window.disableBodyModalCount}`, printLog);
    if(window.disableBodyModalCount === 0){
        removeClass(document.body, 'modal-open');
        log.printInText('enableBodyScroll run!', false);
    }
}
