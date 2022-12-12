import {PortfolioInitialStateType} from "./PortfolioTypes";
import {createSlice} from "@reduxjs/toolkit";
import {getAllWorks, getCategoryWorks} from "./PortfolioAsyncActions";

const initialState:PortfolioInitialStateType = {
    status: "idle",
    categories: {
        "Covers": "Обложки",
        "Posters": "Афиши",
        "Promos_and_animations": "Промо и анимации",
        "2D-Graphics": "2D-Графика",
        "3D-Graphics": "3D-Графика",
        "NFT": "NFT",
        "Animation_and_other": "Анимация и прочее",
        "Sites": "Сайты",
        "Landings": "Лендинги",
        "Interfaces": "Интерфейсы",
        "Branding_and_logos": "Брендинг и логотипы",
    },
    works: []
}

const portfolioSlice = createSlice({
    name: "portfolioSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllWorks.pending, (state, action) => {
            state.status = "loading"
        })
        builder.addCase(getAllWorks.fulfilled, (state, action) => {
            state.status = "loaded"
            state.works = action.payload
        })
        builder.addCase(getAllWorks.rejected, (state, action) => {
            state.status = "error"
        })
        builder.addCase(getCategoryWorks.pending, (state, action) => {
            state.status = "loading"
        })
        builder.addCase(getCategoryWorks.fulfilled, (state, action) => {
            state.status = "loaded"
            state.works = action.payload
        })
        builder.addCase(getCategoryWorks.rejected, (state, action) => {
            state.status = "error"
        })
    }
})

export default portfolioSlice.reducer