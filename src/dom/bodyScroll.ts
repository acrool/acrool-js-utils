import {addClass, hasClass, removeClass} from './dom';


window.disableBodyModalCount = 0;

/**
 * @Deprecated 計畫與
 * 需加上 model-open 樣式
 * body.modal-open{
 *     overflow: hidden;
 *     overscroll-behavior-x: contain;
 *     max-width: 100vw;
 * }
 */
function disableBodyScroll(printLog = false){
    const count = window.disableBodyModalCount;
    if(count >= 0){
        window.disableBodyModalCount += 1;

        if(!hasClass(document.body, 'modal-open')){
            addClass(document.body, 'modal-open');
        }
    }

}

function enableBodyScroll(printLog = false){
    const count = window.disableBodyModalCount;
    if(count > 0){
        window.disableBodyModalCount -= 1;

        if(window.disableBodyModalCount === 0){
            removeClass(document.body, 'modal-open');
        }
    }
}

export default {
    disableBodyScroll,
    enableBodyScroll
};
