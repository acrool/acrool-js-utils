import {intersectionMin} from '../number';


test('intersectionMin', () => {
    expect(intersectionMin([
        [1,20], [5, 24]
    ])).toStrictEqual({min: 5, max: 20});
});
