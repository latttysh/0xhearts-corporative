import { initialStateType} from "./BlogSliceTypes";
import {createSlice} from "@reduxjs/toolkit";
import {getPosts} from "./BlogAsyncActions";

const initialState:initialStateType = {
    status: "idle",
    posts: []
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
    }
})

export default blogSlice.reducer