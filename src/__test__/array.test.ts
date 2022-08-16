import {pull, push, getUnique, arrayJoin, removeByIndex, modifyByIndex} from '../array';

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

test('removeByIndex', () => {
    const fromArray = [1, 2, 3];
    const result = removeByIndex(fromArray, 1);
    expect(result).toStrictEqual([1, 3]);
    expect(fromArray).toEqual([1, 2, 3]);
});


test('modifyByIndex', () => {
    const sourceArray = [
        {id: 1, name: 'jack'},
        {id: 2, name: 'imagine'},
        {id: 3, name: 'gary'},
    ];
    const sourceCheckDiffArray = [
        {id: 1, name: 'jack'},
        {id: 2, name: 'imagine'},
        {id: 3, name: 'gary'},
    ];
    const targetArray = [
        {id: 1, name: 'jack wu'},
        {id: 2, name: 'imagine'},
        {id: 3, name: 'gary'},
    ];
    const result = modifyByIndex(sourceArray, 0, {name: 'jack wu'});
    expect(result).toStrictEqual(targetArray);
    expect(sourceArray).toEqual(sourceCheckDiffArray);
});


test('getUnique', () => {
    expect(getUnique([1, 2, 2, 3, 3])).toStrictEqual([1, 2, 3]);
});


test('arrayJoin', () => {
    const anyString: any = 'uploads.profile';
    expect(arrayJoin(['uploads', 'profile'], '/')).toBe('uploads/profile');
    expect(arrayJoin(anyString, '/')).toBe('');
});
