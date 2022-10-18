/**
 * 簡化日期顯示
 * 如果是今年, 則僅顯示月日, 否則顯示年月日
 */
import dayjs from 'dayjs';
import {isEmpty, isNotEmpty} from './equal';

export function simpleDate(date?: string|null): string{
    if(isEmpty(date)){
        return '';
    }
    const dayObj = dayjs(date);
    return dayObj.year() === dayjs().year() ? dayObj.format('MM/DD'): dayObj.format('YYYY/MM/DD');
}



/**
 * 取得簡單顯示的日期
 */
export function rangeSimpleDate(startDate?: string|null, endDate?: string|null): string{
    return startDate === endDate ? simpleDate(startDate): [startDate, endDate]
        .filter(day => day !== '')
        .map(day => simpleDate(day))
        .join(' - ');
}


