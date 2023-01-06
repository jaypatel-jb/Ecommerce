import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const status = Object.freeze({
    IDEL: 'IDEL',
    LODING: 'LODING',
    ERROR: 'ERROR'
})
const initialState = {
    status: status.IDEL,
    data: []
}

const Productcategories = createSlice({
    name: "categories",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fatchProductcategories.pending, (state, action) => {
            state.status = status.LODING
        })
        builder.addCase(fatchProductcategories.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = status.IDEL
        })
        builder.addCase(fatchProductcategories.rejected, (state, action) => {
            state.status = status.ERROR
        })
    }
})









export default Productcategories.reducer


export const fatchProductcategories= createAsyncThunk('Productcategories/fetch', async () => {
    let link = `https://dummyjson.com/products/categories`;
    
    const res = await axios.get(link);
    const pdata = await res.data;
    return pdata
})