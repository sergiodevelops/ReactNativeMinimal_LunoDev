
import {
    SetSizeKey1,
    SetSizeKey2,
} from './types';


export const setSizeKey1 = (key: string): SetSizeKey1 => ({ type: 'SET_SIZE_KEY1', payload: key });
export const setSizeKey2 = (key: string): SetSizeKey2 => ({ type: 'SET_SIZE_KEY2', payload: key });
