import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
//Type of slice state
interface ThemeState {
    darkMode: boolean
};
//Initial state
const initialState: ThemeState = {
    darkMode: false
};
//Object result from createSlice
export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        turnDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload;
        }
    }
})
//get actions prop for slice
export const { turnDarkMode } = themeSlice.actions;
//Callback for use selector
export const selectDarkMode = (state: RootState) => state.theme.darkMode;
//Export reducer
export default themeSlice.reducer;