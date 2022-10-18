/**
 * 簡化日期顯示
 * 如果是今年, 則僅顯示月日, 否則顯示年月日
 */
import dayjs from 'dayjs';

export function simpleDate(date?: string): string{
    if(date === '' || date === null || typeof date === 'undefined'){
        return '';
    }
    const dayObj = dayjs(date);
    return dayObj.year() === dayjs().year() ? dayObj.format('MM/DD'): dayObj.format('YYYY/MM/DD');
}



/**
 * 取得簡單顯示的日期
 */
export function rangeSimpleDate(startDate?: string, endDate?: string): string{

    const isVisible = !(startDate === '' || startDate === null || typeof startDate !== 'undefined' );
    if(!isVisible){
        return '';
    }

    return isVisible && startDate === endDate ? simpleDate(startDate): [startDate, endDate]
        .filter(day => day !== '' && day !== null && typeof day !== 'undefined')
        .map(day => simpleDate(day))
        .join(' - ');
}


