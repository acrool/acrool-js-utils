import dayjs, {Dayjs} from 'dayjs';

const today = dayjs();
const thisWeek = today.day(0);
const lastWeek = thisWeek.subtract(7, 'day');
const twoWeekAgo = thisWeek.subtract(14, 'day');
const thisMonth = today.set('date', 1);
const lastMonth = thisMonth.subtract(1, 'month');
const twoMonth = thisMonth.subtract(2, 'month');
const thisYear = today.set('month',0).set('date',1);
const halfYearAgo = today.subtract(6, 'month');

export const dateUtils = {
    today,
    thisWeek,
    lastWeek,
    twoWeekAgo,
    thisMonth,
    halfYearAgo,
};

export const format = {
    date: 'YYYY/MM/DD',
    dateDash: 'YYYY-MM-DD',
    dateTime: 'YYYY/MM/DD HH:mm:ss',
    shortDateTime: 'YYYY/MM/DD HH:mm',
    shortTime: 'HH:mm',
    time: 'HH:mm:ss',
};

export enum EDayKey {
    today = 'today',
    yesterday = 'yesterday',
    thisWeek = 'thisWeek',
    lastWeek = 'lastWeek',
    twoWeekAgo = 'twoWeekAgo',
    thisMonth = 'thisMonth',
    lastMonth = 'lastMonth',
    twoMonth = 'twoMonth',
    thisHalfYear = 'thisHalfYear',
    thisYear = 'thisYear',
}
export interface IRangeDate {
    startDate: Dayjs
    endDate: Dayjs
}

export type TDayList = Record<EDayKey, IRangeDate>


export const dayList: TDayList = {
    [EDayKey.today]: {startDate: today, endDate: today},
    [EDayKey.yesterday]: {startDate: today.subtract(1, 'day'), endDate: today.subtract(1, 'day')},
    [EDayKey.thisWeek]: {startDate: thisWeek, endDate: thisWeek.add(6, 'day')},
    [EDayKey.lastWeek]: {startDate: lastWeek, endDate: lastWeek.add(6, 'day')},
    [EDayKey.twoWeekAgo]: {startDate: twoWeekAgo, endDate: twoWeekAgo.add(6, 'day')},
    [EDayKey.thisMonth]: {startDate: thisMonth, endDate: thisMonth.endOf('month')},
    [EDayKey.lastMonth]: {startDate: lastMonth, endDate: lastMonth.endOf('month')},
    [EDayKey.twoMonth]: {startDate: twoMonth, endDate: twoMonth.endOf('month')},
    [EDayKey.thisHalfYear]: {startDate: today.subtract(6, 'month'), endDate: today},
    [EDayKey.thisYear]: {startDate: thisYear, endDate: thisYear.endOf('year')},
};
