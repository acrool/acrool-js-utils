import {paddingLeft} from './common';

describe('paddingLeft', () => {
    it('should return a add zero string for number string', () => {
        expect(paddingLeft('20', 4)).toBe('0020');
    });
});
