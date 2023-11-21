/**
 * 簡化日期顯示
 * 如果是今年, 則僅顯示月日, 否則顯示年月日
 */
import dayjs from 'dayjs';
import {paddingLeft} from '../string';

export function simpleDateTime(date?: string|null): string{
    const resDate = simpleDate(date);
    if(!resDate){
        return '';
    }
    const time = dayjs(date).format('HH:mm');
    return `${resDate} ${time}`;
}


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



interface TTime{
    days: number
    hours: number
    minutes: number
    seconds: number
}
/**
 * formatTotalSeconds 總秒數轉換時間物件
 * @param totalSeconds 總秒數
 * @param isCountDays 是否計算天數
 * @returns 時間物件 {天?, 時, 分, 秒}
 */
export const formatTotalSeconds = (totalSeconds: number, isCountDays = false): TTime => {
    const days = isCountDays ? Math.floor(totalSeconds / 60 / 60 / 24): 0;
    const hours = isCountDays ? Math.floor((totalSeconds / 60 / 60) % 24) : Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {days, hours, minutes, seconds};
};


/**
 * formatTimeToString 總秒數轉換時間戳字串
 * @param totalSeconds 總秒數
 * @param isVisibleMinimumUnitOnly 是否只顯示最小單位 (ex: 00:10:20 只顯示 10:20)
 * @returns 時間戳格式 時：分：秒
 */
export const formatSecondToString = (totalSeconds: number, isVisibleMinimumUnitOnly = false) => {
    const {hours, minutes, seconds} = formatTotalSeconds(totalSeconds, false);
    const unitArr = [hours, minutes, seconds];

    return unitArr
        .filter(unitStr => !isVisibleMinimumUnitOnly || (isVisibleMinimumUnitOnly && unitStr > 0))
        .map(unitStr => paddingLeft(unitStr, 2))
        .join(':');
};
