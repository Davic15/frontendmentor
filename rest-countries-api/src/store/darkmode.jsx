import { createSlice } from "@reduxjs/toolkit";

const initialDarkModeState = { darkmode: false };

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: initialDarkModeState,
    reducers: {
        darkMode(state) {
            state.darkmode = !state.darkmode;
        }
    }
});

export const darkModeAction = darkModeSlice.actions;
export default darkModeSlice;