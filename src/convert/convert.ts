/**
 * RGB轉HEX(16進位)色碼
 * ex: rbg(0,0,0) -> #000000
 *
 * @param rgbStr RGB字串
 */
export function rgbToHex(rgbStr: string): string|undefined {
    const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    const hex = function (x: any) {
        return Number.isNaN(x) ? '00' : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
    };
    const tmp = rgbStr.toLowerCase().match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if(tmp!== null && tmp.length > 3){
        return ['#', hex(tmp[1]) + hex(tmp[2]) + hex(tmp[3])].join('');
    }
    return undefined;
}

/**
 * HEX(16進位)色碼轉轉RGB
 * ex: #000000 -> rgb(0,0,0)

 * @param hexStr HEX字串
 * @param opacity 透明度 (提供透明度參數的話, 會轉回 RGBA)
 */
export function hexToRGB(hexStr: string, opacity = 1): string|undefined {
    let newHexStr = hexStr.replace('#', '');
    const defaultReturn = undefined;
    let regMatch: RegExpMatchArray|null;
    if (/^[0-9A-F]{3}$|^[0-9A-F]{6}$/.test(newHexStr.toUpperCase())) {
        if (newHexStr.length === 3) {
            regMatch = newHexStr.match(/[0-9A-F]/g);
            if(!regMatch){
                return defaultReturn;
            }
            newHexStr = regMatch[0] + regMatch[0] + regMatch[1] + regMatch[1] + regMatch[2] + regMatch[2];
        }

        const r = parseInt(newHexStr.substr(0, 2), 16);
        const g = parseInt(newHexStr.substr(2, 2), 16);
        const b = parseInt(newHexStr.substr(4, 2), 16);

        if(opacity < 1){
            const opacityStr = opacity.toString().replace('0.','.');
            return `rgba(${[r, g, b, opacityStr].join()})`;
        }
        return `rgb(${[r, g, b].join()})`;

    }
    return defaultReturn;
}




/**
 * 過濾只剩下數字
 * ex: asd1234 -> 1234
 *
 * @param value
 * @param defaultValue
 */
export function filterNumber(value: any, defaultValue = 0): number {
    const reg = new RegExp(/^\d+$/);
    if(reg.test(value)){
        return Number(value);
    }

    return defaultValue;
}


/**
 * 空值轉Null
 * ex: '' -> null
 * ex: 0 -> null
 * ex: undefined -> null
 *
 * @param value
 * @param defaultValue
 */
export function emptyToNull<T extends string|number|null>(value?: T): T|null{
    if(typeof value === 'undefined' || ['', 0, null].includes(value)){
        return null;
    }

    return value;
}



/**
 * 轉數字
 * ex: 1234 -> 1234
 *
 * @param value
 * @param defaultValue
 */
export function anyToNumber(value: any, defaultValue = 0): number {
    const numberValue = Number(value);
    if(!isNaN(numberValue)){
        return numberValue;
    }

    return defaultValue;
}

/**
 * 轉布林
 * ex: 'true' => true
 *
 * @param value
 * @param isNotBooleanToUndefined
 */
export function anyToBoolean(value: any, isNotBooleanToUndefined = true): boolean|undefined {
    if(value === 'true' || value === true || value === 1) {
        return true;

    }else if(value === 'false' || value === 0 || value === false){
        return false;

    }else if(isNotBooleanToUndefined){
        return undefined;
    }

    return false;
}



