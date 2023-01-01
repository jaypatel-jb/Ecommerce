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

const Productslice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fatchproduct.pending, (state, action) => {
            state.status = status.LODING
        })
        builder.addCase(fatchproduct.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = status.IDEL
        })
        builder.addCase(fatchproduct.rejected, (state, action) => {
            state.status = status.ERROR
        })
    }
})









export default Productslice.reducer


export const fatchproduct = createAsyncThunk('product/fetch', async () => {
    let link = `https://dummyjson.com/products`;
    
    const res = await axios.get(link);
    const pdata = await res.data;
    return pdata
})