import dayjs from 'dayjs';
import {rangeSimpleDate, simpleDate} from './date';


describe('simpleDate', () => {
    it('should return a formatted date string with year truncated for current year', () => {
        const currentYear = dayjs().year();
        const inputDate = `${currentYear}-03-20T00:00:00.000Z`;
        expect(simpleDate(inputDate)).toBe('03/20');
    });
});


describe('rangeSimpleDate', () => {
    const currentYear = dayjs().year();
    const inputStartDate = `${currentYear}-03-20T00:00:00.000Z`;
    const inputEndDate = `${currentYear}-04-20T00:00:00.000Z`;
    const inputNextDate = `${currentYear + 1}-08-15T00:00:00.000Z`;

    it('should return a formatted date string with year truncated for same date and current year', () => {
        expect(rangeSimpleDate('2023-10-13', '2023-10-13')).toBe('10/13');
    });
    it('should return a formatted date string with year truncated for diff date and not current year', () => {
        expect(rangeSimpleDate('2022-10-13', '2023-10-14')).toBe('2022/10/13 - 2023/10/14');
    });
    it('should return a formatted date string with year truncated for diff date and same current year', () => {
        expect(rangeSimpleDate(inputStartDate, inputEndDate)).toBe('03/20 - 04/20');
    });
    it('should return a formatted date string with year truncated for diff date and  current year', () => {
        expect(rangeSimpleDate('2022-10-13', '2022-10-13')).toBe('2022/10/13');
    });
    it('should return a formatted date string with year truncated for start not current year and end current year', () => {
        expect(rangeSimpleDate('2022-08-14', '2022-08-15')).toBe('2022/08/14 - 08/15');
    });
    it('should return a formatted date string with year truncated for start not current year and end next year', () => {
        expect(rangeSimpleDate(inputStartDate, inputNextDate)).toBe('2023/03/20 - 2024/08/15');
    });
    it('should return a formatted date string with year truncated for not start date', () => {
        expect(rangeSimpleDate('', '2022-10-15')).toBe('2022/10/15');
    });
    it('should return a formatted date string with year truncated for null date', () => {
        expect(rangeSimpleDate(null, null)).toBe('');
    });
    it('should return a formatted date string with year truncated for undefined date', () => {
        expect(rangeSimpleDate(undefined, undefined)).toBe('');
    });
});

