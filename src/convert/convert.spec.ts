import {anyToBoolean, anyToNumber, emptyToNull, hexToRGB, objToFormData,rgbToHex} from './convert';

describe('rgbToHex', () => {
    it('should return a hex string for rgb(0,0,0)', () => {
        expect(rgbToHex('rgb(0,0,0)')).toBe('#000000');
    });
    it('should return a hex string for RGB(255,255,255)', () => {
        expect(rgbToHex('RGB(255,255,255)')).toBe('#ffffff');
    });
    it('should return a undefined for RG255,255,0', () => {
        expect(rgbToHex('RG255,255,0')).toBeUndefined();
    });
});


describe('hexToRGB', () => {
    it('should return a rgba string for #000000 .7', () => {
        expect(hexToRGB('#000000', .7)).toBe('rgba(0,0,0,.7)');
    });
    it('should return a rgb string for #ffffff', () => {
        expect(hexToRGB('#ffffff')).toBe('rgb(255,255,255)');
    });
    it('should return a undefined for fail hex string', () => {
        expect(hexToRGB('#12312312')).toBeUndefined();
    });
});


describe('emptyToNull', () => {
    it('should return a number for number', () => {
        expect(emptyToNull(7)).toBe(7);
    });
    it('should return a string string for string', () => {
        expect(emptyToNull('07')).toBe('07');
        expect(emptyToNull('0')).toBe('0');
    });
    it('should return a null for empty string', () => {
        expect(emptyToNull('')).toBe(null);
    });
    it('should return a null for zero', () => {
        expect(emptyToNull(0)).toBe(null);
    });
    it('should return a null for undefined', () => {
        expect(emptyToNull(undefined)).toBe(null);
    });
});


describe('anyToNumber', () => {
    it('should return a number for number', () => {
        expect(anyToNumber(7)).toBe(7);
    });
    it('should return a number string for string', () => {
        expect(anyToNumber('07')).toBe(7);
        expect(anyToNumber('test')).toBe(0);
    });
    it('should return a number for boolean', () => {
        expect(anyToNumber(true)).toBe(1);
        expect(anyToNumber(false)).toBe(0);
    });
});

describe('anyToBoolean', () => {
    it('should return a undefined for number', () => {
        expect(anyToBoolean(7)).toBeUndefined();
    });
    it('should return a false string for string and not boolean return true', () => {
        expect(anyToBoolean('07', true)).toBeFalsy();
    });
    it('should return a false for string', () => {
        expect(anyToBoolean('0')).toBeFalsy();
        expect(anyToBoolean('1')).toBeFalsy();
    });
    it('should return a false for string boolean', () => {
        expect(anyToBoolean('false')).toBeFalsy();
        expect(anyToBoolean('true')).toBeTruthy();
    });
    it('should return a number for boolean', () => {
        expect(anyToBoolean(0)).toBeFalsy();
        expect(anyToBoolean(1)).toBeTruthy();
    });
    it('should return a boolean for boolean', () => {
        expect(anyToBoolean(true)).toBeTruthy();
        expect(anyToBoolean(false)).toBeFalsy();
    });
});





describe('objToFormData', () => {
    const formDataToObject = (formData: FormData) => {
        const obj: any = {};
        formData.forEach((value, key) => {
            if (key.includes('[')) {
                // Handles array-like keys, such as `profile[0][name]`
                const keys = key.split(/\[|]\[|]/).filter(Boolean);
                keys.reduce((acc, cur, idx) => {
                    if (idx === keys.length - 1) {
                        acc[cur] = value;
                    } else {
                        if (!acc[cur]) {
                            acc[cur] = isNaN(Number(keys[idx + 1])) ? {} : [];
                        }
                    }
                    return acc[cur];
                }, obj);
            } else {
                obj[key] = value;
            }
        });
        return obj;
    };

    it('should convert an object to FormData', () => {
        const data = {
            name: 'Jack',
            age: 30,
            profile: {
                username: 'jacky'
            }
        };

        const formData = objToFormData(data);
        const result = formDataToObject(formData);

        expect(result).toEqual({
            name: 'Jack',
            age: '30', // FormData always stores values as strings
            profile: {
                username: 'jacky'
            }
        });
    });

    it('should handle arrays and nested objects in FormData', () => {
        const data = {
            files: [
                {name: 'file1.txt', size: '123KB'},
                {name: 'file2.txt', size: '456KB'}
            ]
        };

        const formData = objToFormData(data);
        const result = formDataToObject(formData);

        expect(result).toEqual({
            files: [
                {name: 'file1.txt', size: '123KB'},
                {name: 'file2.txt', size: '456KB'}
            ]
        });
    });

    it('should skip undefined or null values', () => {
        const data = {
            name: 'Jack',
            age: null,
            profile: undefined
        };

        const formData = objToFormData(data);
        const result = formDataToObject(formData);

        expect(result).toEqual({
            name: 'Jack'
        });
    });

    it('should handle File objects in FormData', () => {
        const file = new File(['test content'], 'test.txt', {type: 'text/plain'});
        const data = {
            name: 'Jack',
            file: file
        };

        const formData = objToFormData(data);
        
        // 验证 FormData 中是否包含文件
        expect(formData.get('name')).toBe('Jack');
        expect(formData.get('file')).toBeInstanceOf(File);
        expect(formData.get('file')).toBe(file);
    });

    it('should handle File objects with correct extension in FormData', () => {
        const file = new File(['test content'], 'test.png', {type: 'image/png'});
        const data = {
            name: 'Jack',
            image: file
        };

        const formData = objToFormData(data);
        
        // 验证 FormData 中是否包含文件
        expect(formData.get('name')).toBe('Jack');
        expect(formData.get('image')).toBeInstanceOf(File);
        expect(formData.get('image')).toBe(file);
        
        // 验证文件名是否正确
        const formDataEntry = formData.get('image') as File;
        expect(formDataEntry.name).toBe('test.png');
        expect(formDataEntry.type).toBe('image/png');
    });

    it('should handle Blob objects with correct extension in FormData', () => {
        const blob = new Blob(['test content'], {type: 'image/jpeg'});
        const data = {
            name: 'Jack',
            image: blob
        };

        const formData = objToFormData(data);
        
        // 验证 FormData 中是否包含文件
        expect(formData.get('name')).toBe('Jack');
        expect(formData.get('image')).toBeInstanceOf(File); // Blob 会被转换为 File
        expect(formData.get('image')).not.toBe(blob); // 不是同一个对象
        
        // 验证 File 的类型和文件名
        const formDataEntry = formData.get('image') as File;
        expect(formDataEntry.type).toBe('image/jpeg');
        expect(formDataEntry.name).toBe('image.jpeg');
    });
});
