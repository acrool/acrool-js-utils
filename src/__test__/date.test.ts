import {rangeSimpleDate, simpleDate} from '../date';

test('simpleDate', () => {
    expect(simpleDate('2022-10-13')).toBe('10/13');
});

test('rangeSimpleDate', () => {
    expect(rangeSimpleDate('2022-10-13', '2022-10-13')).toBe('10/13');
    expect(rangeSimpleDate('2022-10-14', '2022-10-15')).toBe('10/14 - 10/15');
});