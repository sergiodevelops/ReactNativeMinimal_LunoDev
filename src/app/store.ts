// store.ts
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import styleThemeReducer from '../redux/features/styleTheme/styleThemeSlice';


const reducer = combineReducers({
    styleTheme: styleThemeReducer,
});

// TODO vedere error traspiler TypeScript
// TS4023: Exported variable store has or is using name StyleThemeState from external module
export const store = configureStore({reducer});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];
