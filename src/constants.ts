import path from 'path';

export const IS_DEV = process.env.NODE_ENV === 'development';
export const DIRNAME = IS_DEV ? path.resolve('src') : '';
export const STATICS = path.resolve(DIRNAME, 'statics');
export const DATA = JSON.parse(process.env.DATA || '{}');
