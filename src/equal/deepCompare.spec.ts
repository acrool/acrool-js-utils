import deepCompare from './deepCompare';


describe('deepCompare', () => {
    it('should return a true for number & number', () => {
        expect(deepCompare(123, 123)).toBeTruthy();
    });

    it('should return a false for number & string', () => {
        expect(deepCompare(123,'123')).toBeFalsy();
    });

    it('should return a false for object and not same attr object', () => {
        expect(deepCompare({name: 'jack', child: {birthday: '1988-12-14'}}, {name: 'jack', child: {}}, true)).toBeFalsy();
    });

    it('should return a true for object and same object', () => {
        expect(deepCompare({name: 'jack', child: {birthday: undefined}}, {name: 'jack', child: {}})).toBeTruthy();
        expect(deepCompare(['jack'], ['jack'])).toBeTruthy();
    });

    it('should return a false for function and function', () => {
        expect(deepCompare(() => {}, () => {})).toBeFalsy();
    });
});

