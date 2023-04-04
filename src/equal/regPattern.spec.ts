import regPattern from './regPattern';


describe('regPattern', () => {

    it('should return a true for number', () => {
        expect(new RegExp(regPattern.number).test('1')).toBeTruthy();
        expect(new RegExp(regPattern.number).test('a')).toBeFalsy();
    });

    it('should return a true for email', () => {
        expect(new RegExp(regPattern.email).test('jack@mail.com')).toBeTruthy();
        expect(new RegExp(regPattern.email).test('jackmail.com')).toBeFalsy();
    });

    it('should return a true for account', () => {
        expect(new RegExp(regPattern.account).test('abc123Efg')).toBeTruthy();
        expect(new RegExp(regPattern.account).test('abc123_Ef@g')).toBeFalsy();
    });

    it('should return a true for protocolDomain', () => {
        expect(new RegExp(regPattern.protocolDomain).test('https://www.goo.com')).toBeTruthy();
        expect(new RegExp(regPattern.protocolDomain).test('http://www.goo.com')).toBeTruthy();
        expect(new RegExp(regPattern.protocolDomain).test('http://www.goo.com/')).toBeTruthy();
        expect(new RegExp(regPattern.protocolDomain).test('www.goo.com')).toBeFalsy();
        expect(new RegExp(regPattern.protocolDomain).test('goo.com')).toBeFalsy();
    });

    it('should return a true for domain', () => {
        expect(new RegExp(regPattern.domain).test('https://www.goo.com')).toBeTruthy();
        expect(new RegExp(regPattern.domain).test('http://www.goo.com')).toBeTruthy();
        expect(new RegExp(regPattern.domain).test('http://www.goo.com/')).toBeTruthy();
        expect(new RegExp(regPattern.domain).test('www.goo.com')).toBeTruthy();
        expect(new RegExp(regPattern.domain).test('goo.com')).toBeTruthy();
        expect(new RegExp(regPattern.domain).test('wwwgoocom')).toBeFalsy();
    });

    it('should return a true for ipAddress', () => {
        expect(new RegExp(regPattern.ipAddress).test('192.168.1.10')).toBeTruthy();
        expect(new RegExp(regPattern.ipAddress).test('192.168.299.299')).toBeTruthy();
        expect(new RegExp(regPattern.ipAddress).test('a.d.12312')).toBeFalsy();
        expect(new RegExp(regPattern.ipAddress).test('http://58.180.27.75/img_item/2022/11/21/LEE18DRX22112112_154V.jpg')).toBeFalsy();
    });

    it('should return a true for date', () => {
        expect(new RegExp(regPattern.date).test('2022-01-09')).toBeTruthy();
        expect(new RegExp(regPattern.date).test('2022/01/09')).toBeTruthy();
        expect(new RegExp(regPattern.date).test('2022.01.09')).toBeTruthy();
        expect(new RegExp(regPattern.date).test('20220109')).toBeFalsy();
    });


    const svgContent = `<div><svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="icon_angle_up" viewBox="0 0 1024 1024" width="undefined" height="undefined">
<path d="M1024,707.58l-512-512l-512,512l120.83,120.83L512,435.2l391.17,393.22L1024,707.58z"/>
  </symbol></svg></div>`;



    it('should return a svg for html', () => {
        const svgResult = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="icon_angle_up" viewBox="0 0 1024 1024" width="undefined" height="undefined">
<path d="M1024,707.58l-512-512l-512,512l120.83,120.83L512,435.2l391.17,393.22L1024,707.58z"/>
  </symbol></svg>`;

        const result = svgContent.match(regPattern.svg);
        expect(result[0]).toEqual(svgResult);
    });

    it('should return a symbol for html', () => {
        const symbolResult = `<symbol id="icon_angle_up" viewBox="0 0 1024 1024" width="undefined" height="undefined">
<path d="M1024,707.58l-512-512l-512,512l120.83,120.83L512,435.2l391.17,393.22L1024,707.58z"/>
  </symbol>`;

        const result = svgContent.match(regPattern.symbol);
        expect(result[0]).toEqual(symbolResult);
    });

    it('should return a id attr for html', () => {
        const result = svgContent.match(regPattern.htmlAttrId);
        expect(result[0]).toEqual(`id=\"icon_angle_up\"`);
    });

});

