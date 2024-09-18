import { configureStore } from '@reduxjs/toolkit';
import {default as themeReducer} from './features/theme/theme';
import {default as languageReducer} from './features/language/language';
export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      language: languageReducer
    }
  })
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];