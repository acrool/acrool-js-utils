
/**
 * 取得前端資源網址
 */
export function asset(path?: string): string{
    if(path){
        // 去除參數第一個斜線
        return `${process.env.PUBLIC_URL}/static/${path.replace(/^\//, '')}`;
    }
    return '';
}


