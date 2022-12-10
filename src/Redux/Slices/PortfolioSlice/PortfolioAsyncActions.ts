import {createAsyncThunk} from "@reduxjs/toolkit";
import {newWorkType} from "./PortfolioTypes";
import axios from "../../../axios";

export const createWork = createAsyncThunk(
    "porfolio/create",
    async (newWork: newWorkType) => {
        const {data} = await axios.post("/portfolio", newWork)
        return data
    }
)

export const getAllWorks = createAsyncThunk(
    "portfolio/getAll",
    async () => {
        const {data} = await axios.get("/portfolio")
        return data
    }
)

export const getCategoryWorks = createAsyncThunk(
    "portfolio/getCategory",
    async (category:string) => {
        const {data} = await axios.get(`/portfolio/category/${category}`)
        return data
    }
)