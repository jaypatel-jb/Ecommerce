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

const Productcategoryslice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fatchSpecificproduct.pending, (state, action) => {
            state.status = status.LODING
        })
        builder.addCase(fatchSpecificproduct.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = status.IDEL
        })
        builder.addCase(fatchSpecificproduct.rejected, (state, action) => {
            state.status = status.ERROR
        })
    }
})



export default Productcategoryslice.reducer


export const fatchSpecificproduct = createAsyncThunk('productfetch/specific', async (id,viewids) => {
    let link = `https://dummyjson.com/products/${id}/`;
    const res = await axios.get(link);
    const pdata = await res.data;
    return pdata
})