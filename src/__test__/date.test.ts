import {rangeSimpleDate, simpleDate} from '../date';

test('simpleDate', () => {
    expect(simpleDate('2022-10-13')).toBe('10/13');
});

test('rangeSimpleDate', () => {
    expect(rangeSimpleDate('2023-10-13', '2023-10-13')).toBe('10/13');
    expect(rangeSimpleDate('2022-10-13', '2023-10-14')).toBe('2022/10/13 - 2023/10/14');
    expect(rangeSimpleDate('2022-10-13', '2022-10-13')).toBe('2022/10/13');
    expect(rangeSimpleDate('2022-08-14', '2022-08-15')).toBe('2022/08/14 - 08/15');
    expect(rangeSimpleDate('', '2022-10-15')).toBe('2022/10/15');
    expect(rangeSimpleDate(null, null)).toBe('');
    expect(rangeSimpleDate(undefined, undefined)).toBe('');
});
