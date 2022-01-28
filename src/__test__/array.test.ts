import {pull, push} from '../array';

test('pull', () => {
    const fromArray = [1, 2];
    const result = pull(fromArray, 3);
    expect(result).toStrictEqual([3, 1, 2]);
    expect(fromArray).toEqual([1, 2]);
});

test('push', () => {
    const fromArray = [1, 2];
    const result = push(fromArray, 3);
    expect(result).toStrictEqual([1, 2, 3]);
    expect(fromArray).toEqual([1, 2]);
});
