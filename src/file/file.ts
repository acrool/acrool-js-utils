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



/**
 * Base64 轉 Blob
 * @param base64Str
 * @param contentType
 */
export const base64ToBlob = (base64Str: string, contentType: string): Blob => {
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
};
