import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const status = Object.freeze({
  IDEL: "IDEL",
  LODING: "LODING",
  ERROR: "ERROR",
});
const initialState = {
  status: status.IDEL,
  data: [],
};

const SpecificProductList = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fatchproductlist.pending, (state, action) => {
      state.status = status.LODING;
    });
    builder.addCase(fatchproductlist.fulfilled, (state, action) => {
      state.data = action.payload[0].data;
      state.status = status.IDEL;
    });
    builder.addCase(fatchproductlist.rejected, (state, action) => {
      state.status = status.ERROR;
    });
  },
});

export default SpecificProductList.reducer;

export const fatchproductlist = createAsyncThunk(
  "product/fetch",
  async (list) => {
    let link = `http://127.0.0.1:5000/singlepage/${list}`;

    const res = await axios.get(link);
    const pdata = await res.data;
    return pdata;
  }
);
