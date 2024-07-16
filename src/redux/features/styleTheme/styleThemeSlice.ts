// themeSlice.ts
import { createSlice } from '@reduxjs/toolkit';


interface StyleThemeState {
    value: 'light' | 'dark';
}
const initialState: StyleThemeState = {
    value: 'dark',
}


export const styleThemeSlice = createSlice({
    name: 'styleTheme',
    initialState: initialState,
    reducers: {
        toogle: (state: StyleThemeState) => {
            state.value = (state.value !== 'dark' ? 'dark' : 'light');
        },
    },
});
export const { toogle } = styleThemeSlice.actions;
// export const selectStyleTheme = (state: StyleThemeState) => state;


export default styleThemeSlice.reducer;
