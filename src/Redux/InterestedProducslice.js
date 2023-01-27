import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    InterestedProduclist: [],

}

const InterestedProduc = createSlice({
    name: 'InterestedProduc',
    initialState,
    reducers: {
        InterestedProducList: (state, action) => {
            if (action.payload !== undefined) {

                state.InterestedProduclist = [...state.InterestedProduclist, action.payload]
            }


        },
    }

})

export default InterestedProduc.reducer
export const { InterestedProducList } = InterestedProduc.actions