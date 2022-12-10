import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import blogSlice from "./Slices/BlogSlice/BlogSlice";
import languageSlice from "./Slices/LanguageSlice/LanguageSlice";

export const store = configureStore({
    reducer: {
        blogSlice,
        languageSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();