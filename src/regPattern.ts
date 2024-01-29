
/**
 * 正則表達式條件參數
 */
export default {
    number: /^(\d+)$/,
    double: /^\d+(\.\d+)?$/,
    account: /^[A-Za-z0-9]+$/,
    email: /^[A-Za-z0-9._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    protocolDomain: /(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}/g,
    domain: /(:(http(s)?:\/\/.))?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}/g,
    ipAddress: /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/,
    date: /^([0-9]{4})[/.-]{1}([0-9]{1,2})[/.-]{1}([0-9]{1,2})$/,
    svg: /<svg\b[^>]*?(?:viewBox=\"(\b[^"]*)\")?>([\s\S]*?)<\/svg>/g,
    symbol: /<symbol\b[^>]*?(?:viewBox=\"(\b[^"]*)\")?>([\s\S]*?)<\/symbol>/g,
    htmlAttrId: /id=\"(.*?)\"/g,
};
