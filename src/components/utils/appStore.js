import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import movieReducer from './movieSlice'
import movieSerchReducer from './movieGptSlice'
import languageReducer from './langSlice'

const appStore = configureStore({
  reducer: {
    user: useReducer,
    movies:movieReducer,
    serachGpt:movieSerchReducer,
    language:languageReducer
  },
});

export default appStore;
