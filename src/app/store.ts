// store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/features/counter/counterSlice';
import styleThemeReducer from '../redux/features/styleTheme/styleThemeSlice';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        styleTheme: styleThemeReducer,
    },
});


// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];
