import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import blogSlice from "./Slices/BlogSlice/BlogSlice";

export const store = configureStore({
    reducer: {
        blogSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();