import { createSlice } from "@reduxjs/toolkit";





const initialState = {
    Producfilterlist: '',
    status:'LODING'
}

const PriceFilter = createSlice({
    name: 'FilterSlice',
    initialState,
    reducers: {
        SelectAll: (state, action) => {
            const Reset = (a, b) => {
                return a.id - b.id

            }
            state.Producfilterlist = [...action.payload].sort(Reset)
            state.status='IDEL'
        },
        Selectlow: (state, action) => {
            const Sortbylow = (a, b) => {
                return a.price - b.price

            }
            state.Producfilterlist = [...action.payload].sort(Sortbylow)
            state.status='IDEL'
        },
        selectHigh: (state, action) => {
            const Sortbyhigh = (a, b) => {
                return b.price - a.price
            }
            state.Producfilterlist = [...action.payload].sort(Sortbyhigh)
            state.status='IDEL'
        }
    }

})

export default PriceFilter.reducer
export const { SelectAll, Selectlow, selectHigh } = PriceFilter.actions