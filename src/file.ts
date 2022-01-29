/**
 * File 轉 Base64Str
 *
 * @param file
 */
export function fileConvertBase64(file: File): Promise<string|undefined>{
    const reader = new FileReader();
    return new Promise(resolve => {
        reader.onload = ev => {
            // @ts-ignore
            resolve(ev.target.result);
        };
        reader.readAsDataURL(file);
    });
}
