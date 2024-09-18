import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
//Interface
interface LanguageState {
    vietnamese: boolean
}
//initial
const initialState: LanguageState = {
    vietnamese: true
};
//Create redux object
export const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        turnVietnamese: (state, action: PayloadAction<boolean>) => {
            state.vietnamese = action.payload;
        }
    }
});
//actions
export const { turnVietnamese } = languageSlice.actions;
//callback for use selector
export const selectVietnamese = (state:RootState) => state.language.vietnamese;
//Reducers as default
export default languageSlice.reducer;