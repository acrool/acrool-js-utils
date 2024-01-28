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



/**
 * File 轉 Base64Str
 *
 * @param file
 */
export function fileToBase64(file: File): Promise<string> {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onload = ev => {
            if(ev.target?.result){
                resolve(ev.target.result as string);
            }
        };
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}



/**
 * Base64 轉 Blob
 * @param base64Str
 * @param contentType
 */
export function base64ToBlob(base64Str: string, contentType: string): Blob {
    contentType = contentType || '';
    const byteCharacters = atob(base64Str);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
        const slice = byteCharacters.slice(offset, offset + 1024);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
}

