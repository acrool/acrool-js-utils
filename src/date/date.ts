import dayjs from 'dayjs';
import {paddingLeft} from '../common';
import {TTime} from './types';


/**
 * 格式化日期和時間
 * 此函數接受一個可選的日期字符串，並返回一個格式化的日期和時間字符串。
 * 如果日期在當前年份，則僅顯示月和日；否則顯示完整的年、月、日。
 * 時間部分始終以 'HH:mm' 格式顯示。
 * 如果輸入的日期字符串無效或者為空，則返回空字符串。
 *
 * @param {string|null} [dateString] - 可選的日期字符串
 * @returns {string} 格式化的日期和時間字符串，或者在無效的輸入時返回空字符串
 */
export function simpleDateTime(dateString?: string|null): string {
    // 確保日期字符串不是空的
    if (!dateString || !dateString.trim()) {
        return '';
    }

    // 創建一個 dayjs 對象
    const dayObj = dayjs(dateString);

    // 確保日期是有效的
    if (!dayObj.isValid()) {
        return '';
    }

    // 使用 simpleDate 函數來獲得日期部分
    const resDate = simpleDate(dateString); // 假設 simpleDate 是有效的且已經導入

    // 格式化時間部分
    const time = dayObj.format('HH:mm');

    // 組合日期和時間
    return `${resDate} ${time}`;
}


/**
 * 簡化顯示日期
 * 此函數接受一個可選的日期字符串，並根據是否與當前年份相同返回不同的日期格式。
 * 如果日期與當前年份相同，則以 'MM/DD' 的格式返回；
 * 如果不同，則以 'YYYY/MM/DD' 的格式返回。
 * 如果輸入的日期字符串無效、為空或者只包含空格，則返回空字符串。
 *
 * @param {string|null} [dateString] - 可選的日期字符串
 * @returns {string} 格式化後的日期字符串，或者在無效的輸入時返回空字符串
 */
export function simpleDate(dateString?: string|null): string{
    // 直接檢查 dateString 是否為空或只包含空格
    if (!dateString || !dateString.trim()) {
        return '';
    }

    const dayObj = dayjs(dateString);

    // 確保傳入的日期是有效的
    if (!dayObj.isValid()) {
        return '';
    }

    // 根據是否與當前年份相同來決定格式
    return dayjs().isSame(dayObj, 'year') ? dayObj.format('MM/DD') : dayObj.format('YYYY/MM/DD');
}


/**
 * 獲得日期範圍的簡化表示
 * 此函數接受兩個日期字符串作為起始和結束日期，並返回一個表示這段日期範圍的格式化字符串。
 * 如果只有一個有效日期或兩個日期相同，則只返回該日期的簡化表示。
 * 如果起始和結束日期在同一年，則以 'MM/DD' 的格式顯示兩個日期。
 * 如果不在同一年，則兩個日期都以 'YYYY/MM/DD' 的格式顯示。
 * 如果任一輸入的日期字符串無效、為空或者只包含空格，則返回空字符串。
 *
 * @param {string|null} [startDate] - 起始日期字符串
 * @param {string|null} [endDate] - 結束日期字符串
 * @returns {string} 格式化的日期範圍字符串，或者在無效的輸入時返回空字符串
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
export const formatSecondToString = (totalSeconds: number, isVisibleMinimumUnitOnly = false): string => {
    const {hours, minutes, seconds} = formatTotalSeconds(totalSeconds, false);
    const unitArr = [hours, minutes, seconds];
    let actInx = 0;
    return unitArr.reduce((curr, unitStr, idx) => {
        if(actInx >= idx){
            if(isVisibleMinimumUnitOnly && unitStr === 0){
                actInx = idx;
                return curr;
            }
        }
        return [...curr, paddingLeft(unitStr, 2)];
    }, [] as string[])
        .join(':');

};
