import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    CartProduc: [],

}

const CartProductlist = createSlice({
    name: 'CartProducts',
    initialState,
    reducers: {
        CartProductlists: (state, action) => {
            state.CartProduc = [...state.CartProduc,action.payload]


        },
    }

})

export default CartProductlist.reducer
export const { CartProductlists } = CartProductlist.actions