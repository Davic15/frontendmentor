import { configureStore } from '@reduxjs/toolkit';
import darkModeSlice  from './darkmode';

const store = configureStore({
    reducer: {
        darkMode: darkModeSlice.reducer
    }
});

export default store;