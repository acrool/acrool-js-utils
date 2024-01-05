import {IBrowser} from './types';


export class Safari implements IBrowser{
    ready(){

    }
    open() {}
    close() {}
}

export class Chrome implements IBrowser{
    ready(){}
    open() {}
    close() {}
}
