import dayjs from 'dayjs';
import {rangeSimpleDate, simpleDate, simpleDateTime, formatSecondToString, formatTotalSeconds} from './date';


describe('simpleDateTime', () => {
    it('should return a formatted date time string with year truncated for current year', () => {
        const currentYear = dayjs().year();
        const inputDate = `${currentYear}-03-20T10:02:00`;
        expect(simpleDateTime(inputDate)).toBe('03/20 10:02');
    });
});
describe('simpleDate', () => {
    it('should return a formatted date string with year truncated for current year', () => {
        const currentYear = dayjs().year();
        const inputDate = `${currentYear}-03-20T00:00:00.000Z`;
        expect(simpleDate(inputDate)).toBe('03/20');
    });
});


describe('rangeSimpleDate', () => {
    const currentYear = dayjs().year();
    const lastYear = currentYear - 1;
    const nextYear = currentYear + 1;

    // 動態生成的日期
    const inputStartDate = `${currentYear}-03-20`;
    const inputEndDate = `${currentYear}-04-20`;
    const inputNextYearDate = `${nextYear}-08-15`;
    const inputLastYearDate = `${lastYear}-10-13`;

    it('should return a formatted date string with year truncated for same date and current year', () => {
        const testDate = `${currentYear}-10-13`;
        expect(rangeSimpleDate(testDate, testDate)).toBe('10/13');
    });

    it('should return a formatted date string with year for different dates across years', () => {
        expect(rangeSimpleDate(inputLastYearDate, `${currentYear}-10-14`)).toBe(`${lastYear}/10/13 - ${currentYear}/10/14`);
    });

    it('should return a formatted date string with year truncated for different dates in the same current year', () => {
        expect(rangeSimpleDate(inputStartDate, inputEndDate)).toBe('03/20 - 04/20');
    });

    it('should return a formatted date string with year for the same date but not current year', () => {
        expect(rangeSimpleDate(inputLastYearDate, inputLastYearDate)).toBe(`${lastYear}/10/13`);
    });

    it('should return a formatted date string for a range from last year to current year', () => {
        expect(rangeSimpleDate(inputLastYearDate, `${lastYear}-08-15`)).toBe(`${lastYear}/10/13 - 08/15`);
    });

    it('should return a formatted date string for a range from current year to next year', () => {
        expect(rangeSimpleDate(inputStartDate, inputNextYearDate)).toBe(`${currentYear}/03/20 - ${nextYear}/08/15`);
    });

    it('should return a formatted date string for only end date in last year', () => {
        expect(rangeSimpleDate('', inputLastYearDate)).toBe(`${lastYear}/10/13`);
    });

    it('should return an empty string for null dates', () => {
        expect(rangeSimpleDate(null, null)).toBe('');
    });

    it('should return an empty string for undefined dates', () => {
        expect(rangeSimpleDate(undefined, undefined)).toBe('');
    });
});


describe('formatTotalSeconds', () => {
    it('should return a formatted 121 second', () => {
        expect(formatTotalSeconds(121)).toEqual({days: 0, hours: 0, minutes: 2, seconds: 1});
    });
    it('should return a formatted 36000 second to HH:mm:ss', () => {
        expect(formatTotalSeconds(36000)).toEqual({days: 0, hours: 10, minutes: 0, seconds: 0});
    });
    it('should return a formatted 104400 second not isCountDay', () => {
        expect(formatTotalSeconds(104400)).toEqual({days: 0, hours: 29, minutes: 0, seconds: 0});
    });
    it('should return a formatted 104400 second isCountDay', () => {
        expect(formatTotalSeconds(104400, true)).toEqual({days: 1, hours: 5, minutes: 0, seconds: 0});
    });
});


describe('formatSecondToString', () => {
    it('should return a formatted 121 second to HH:mm:ss', () => {
        expect(formatSecondToString(121)).toBe('00:02:01');
    });
    it('should return a formatted 121 second to mm:ss (isVisibleMinimumUnitOnly)', () => {
        expect(formatSecondToString(121, true)).toBe('02:01');
        expect(formatSecondToString(120, true)).toBe('02:00');
        expect(formatSecondToString(36001, true)).toBe('10:00:01');
    });
    it('should return a formatted 36000 second to HH:mm:ss', () => {
        expect(formatSecondToString(36000)).toBe('10:00:00');
    });
    it('should return a formatted 104400 second to HH:mm:ss', () => {
        expect(formatSecondToString(104400)).toBe('29:00:00');
    });
});
