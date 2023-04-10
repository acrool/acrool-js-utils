/**
 * 簡化日期顯示
 * 如果是今年, 則僅顯示月日, 否則顯示年月日
 */
import dayjs from 'dayjs';

export function simpleDate(date?: string|null): string{
    if(typeof date === 'undefined' || date === null || (typeof date === 'string' && date.trim().length === 0)){
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

    const startDayjs = dayjs(startDate);
    const endDayjs = dayjs(endDate);

    const format = {
        shortDate: 'MM/DD',
        fullDate: 'YYYY/MM/DD',
    };

    // 與現在年份相同
    if(startDayjs.isSame(endDate, 'year')){
        return [simpleDate(startDate), endDayjs.format(format.shortDate)].join(' - ');
    }

    return [startDayjs.format(format.fullDate), endDayjs.format(format.fullDate)].join(' - ');
}


