import {Dayjs} from 'dayjs';

import {EDayKey} from './config';

export interface TTime{
    days: number
    hours: number
    minutes: number
    seconds: number
}


interface IRangeDate {
    startDate: Dayjs
    endDate: Dayjs
}

export type TDayList = Record<EDayKey, IRangeDate>
