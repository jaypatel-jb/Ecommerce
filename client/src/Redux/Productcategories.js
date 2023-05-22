import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};
const status = Object.freeze({
  IDEL: "IDEL",
  LODING: "LODING",
  ERROR: "ERROR",
});
const Productcategories = createSlice({
  name: "categories",
  initialState,
  //   reducers: {
  //     getproductcategories: (state, action) => {
  //       state.data = [...action.payload];
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(fatchProductcategories.pending, (state, action) => {
      state.status = status.LODING;
    });
    builder.addCase(fatchProductcategories.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = status.IDEL;
    });
    builder.addCase(fatchProductcategories.rejected, (state, action) => {
      state.status = status.ERROR;
    });
  },
});

export default Productcategories.reducer;
// export const { getproductcategories } = Productcategories.actions;

export const fatchProductcategories = createAsyncThunk(
  "Productcategories/fetch",
  async () => {
    let link = `http://127.0.0.1:5000/`;

    const res = await axios.get(link);
    const pdata = await res.data;
    return pdata;
  }
);
