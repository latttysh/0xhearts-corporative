import {createAsyncThunk} from "@reduxjs/toolkit";
import {formType} from "./FormTypes";
import axios from "../../../axios";

export const sendForm = createAsyncThunk(
    "form/send",
    async (formData: formType) => {
        const {data} = await axios.post("/form", formData)
        return data
    }
)