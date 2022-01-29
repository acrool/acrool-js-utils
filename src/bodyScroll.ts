import {addClass, removeClass} from './dom';
import log from './log';

let disableBodyModalCount = 0;
export function disableBodyScroll(){
    log.mobile(`disableBodyScroll ${disableBodyModalCount}`);

    if(disableBodyModalCount === 0){
        addClass(document.body, 'modal-open');
        log.mobile('disableBodyScroll run!');
    }
    disableBodyModalCount += 1;
}

export function enableBodyScroll(){
    disableBodyModalCount -= 1;
    log.mobile(`enableBodyScroll ${disableBodyModalCount}`);
    if(disableBodyModalCount === 0){
        removeClass(document.body, 'modal-open');
        log.mobile('enableBodyScroll run!');
    }
}
