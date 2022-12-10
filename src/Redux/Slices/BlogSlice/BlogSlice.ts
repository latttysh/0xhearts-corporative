import { initialStateType} from "./BlogSliceTypes";
import {createSlice} from "@reduxjs/toolkit";
import {getPost, getPosts} from "./BlogAsyncActions";

const initialState:initialStateType = {
    status: "idle",
    posts: [],
    post: {
        createdAt: "",
        category: "",
        author: "",
        title: "",
        id: 0,
        cover_img: "",
        text: "",
        updatedAt: ""
    }
}

const blogSlice = createSlice({
    name: "blogSlice",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state,action) => {
            state.status = "loading"
        })
        builder.addCase(getPosts.fulfilled, (state,action) => {
            state.status = "loaded"
            state.posts = action.payload
        })
        builder.addCase(getPosts.rejected, (state,action) => {
            state.status = "error"
        })

        builder.addCase(getPost.pending, (state,action) => {
            state.status = "loading"
        })
        builder.addCase(getPost.fulfilled, (state,action) => {
            state.status = "loaded"
            state.post = action.payload
        })
        builder.addCase(getPost.rejected, (state,action) => {
            state.status = "error"
        })
    }
})

export default blogSlice.reducer