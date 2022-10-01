import {autoMapper, getTrueKey, reverseObj} from '../object';


test('getTrueKey', () => {
    expect(getTrueKey({_1: true, _2: false, _3: true})).toStrictEqual([1, 3]);
});



test('autoMapper', () => {
    expect(autoMapper({name: 'jack'}, {name: 'id'})).toStrictEqual({id: 'jack'});
    expect(autoMapper({name: 'jack'}, {data: 'body'})).toStrictEqual({name: 'jack'});
});




test('reverseObj', () => {
    expect(reverseObj({name: 'jack'})).toStrictEqual({jack: 'name'});
});
