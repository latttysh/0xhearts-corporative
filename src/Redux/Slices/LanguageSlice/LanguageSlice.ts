import {createSlice} from "@reduxjs/toolkit";

export interface LanguageType {
    language: string
}

const initialState: LanguageType = {
    language: "ru"
}

const languageSlice = createSlice({
    name: "languageSlice",
    initialState,
    reducers: {
        changeLanguage(state, action) {
            state.language="en"
        }
    }
})

export default languageSlice.reducer