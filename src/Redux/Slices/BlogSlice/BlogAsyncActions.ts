import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getPosts = createAsyncThunk(
    "blog/get_posts",
    async () => {
        const {data} = await axios.get("/posts/")
        return data
    }
)