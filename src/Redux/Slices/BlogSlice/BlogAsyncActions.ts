import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../axios";
import {newPostData} from "./BlogSliceTypes";

export const getPosts = createAsyncThunk(
    "blog/get_posts",
    async () => {
        const {data} = await axios.get("/posts/")
        return data
    }
)

export const createPost = createAsyncThunk(
    "blog/create_post",
    async (newPost: newPostData) => {
        const {data} = await axios.post("/posts/", newPost)
        return data
    }
)

export const getPost = createAsyncThunk(
    "blog/get_post",
    async (id:string) => {
        const {data} = await axios.get(`/posts/${id}`)
        return data
    }
)