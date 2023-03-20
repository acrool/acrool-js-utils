/**
 * 簡化日期顯示
 * 如果是今年, 則僅顯示月日, 否則顯示年月日
 */
import dayjs from 'dayjs';
import {isEmpty, isNotEmpty} from './equal';
import {
    start
} from 'repl';

export function simpleDate(date?: string|null): string{
    if(isEmpty(date)){
        return '';
    }
    const dayObj = dayjs(date);
    return dayjs().isSame(dayObj, 'year') ? dayObj.format('MM/DD'): dayObj.format('YYYY/MM/DD');
}



/**
 * 取得簡單顯示的日期
 */
export function rangeSimpleDate(startDate?: string|null, endDate?: string|null): string{

    const date = [startDate, endDate]
        .filter(day => day !== '' && day);

    if(date.length === 1 || date[0] === date[1]){
        return simpleDate(date[0]);
    }

    if(dayjs(startDate).isSame(endDate, 'year')){
        return [dayjs(date[0]).format('YYYY/MM/DD'), dayjs(date[1]).format('MM/DD')].join(' - ');

    }else if(dayjs().isSame(endDate, 'year')){
        return [dayjs(date[0]).format('YYYY/MM/DD'), dayjs(date[1]).format('YYYY/MM/DD')].join(' - ');
    }

    return [simpleDate(date[0]), simpleDate(date[1])].join(' - ');
}


