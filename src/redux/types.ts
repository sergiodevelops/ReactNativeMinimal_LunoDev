export interface State {}


interface Action<T, P, M = undefined> {
    type: T;
    payload: P;
    meta?: M;
}


export type SetSizeKey1 = Action<'SET_SIZE_KEY1', string>;
export type SetSizeKey2 = Action<'SET_SIZE_KEY2', string>;


export type Actions =
    SetSizeKey1
    | SetSizeKey2;