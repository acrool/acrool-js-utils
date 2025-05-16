import dayjs, {Dayjs} from 'dayjs';

import {TDayList} from './types';

const today = dayjs();
const thisWeek = today.day(0);
const lastWeek = thisWeek.subtract(7, 'day');
const twoWeekAgo = thisWeek.subtract(14, 'day');
const thisMonth = today.set('date', 1);
const halfYearAgo = today.subtract(6, 'month');


export const dateUtils = {
    today,
    thisWeek,
    lastWeek,
    twoWeekAgo,
    thisMonth,
    halfYearAgo,
};


export enum EDayKey {
    today= 'today',
    yesterday = 'yesterday',
    thisWeek = 'thisWeek',
    lastWeek = 'lastWeek',
    twoWeekAgo = 'twoWeekAgo',
    thisMonth = 'thisMonth',
}


export const dayList: TDayList = {
    [EDayKey.today]: {startDate: today, endDate: today},
    [EDayKey.yesterday]: {startDate: today.subtract(1, 'day'), endDate: today.subtract(1, 'day')},
    [EDayKey.thisWeek]: {startDate: thisWeek, endDate: thisWeek.add(6, 'day')},
    [EDayKey.lastWeek]: {startDate: lastWeek, endDate: lastWeek.add(6, 'day')},
    [EDayKey.twoWeekAgo]: {startDate: twoWeekAgo, endDate: twoWeekAgo.add(6, 'day')},
    [EDayKey.thisMonth]: {startDate: thisMonth, endDate: thisMonth.endOf('month')},
};
