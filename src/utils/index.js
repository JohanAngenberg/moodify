export const getBuffer = string => {
    const buff = Buffer.from(string);
    return buff.toString('base64');
}