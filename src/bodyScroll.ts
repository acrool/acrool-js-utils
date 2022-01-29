import {addClass, removeClass} from './dom';
import log from './log';

let disableBodyModalCount = 0;
export function disableBodyScroll(){
    log.printInText(`disableBodyScroll ${disableBodyModalCount}`, false);

    if(disableBodyModalCount === 0){
        addClass(document.body, 'modal-open');
        log.printInText('disableBodyScroll run!', false);
    }
    disableBodyModalCount += 1;
}

export function enableBodyScroll(){
    disableBodyModalCount -= 1;
    log.printInText(`enableBodyScroll ${disableBodyModalCount}`, false);
    if(disableBodyModalCount === 0){
        removeClass(document.body, 'modal-open');
        log.printInText('enableBodyScroll run!', false);
    }
}
