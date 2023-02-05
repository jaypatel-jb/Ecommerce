import { createSlice, current } from "@reduxjs/toolkit";
import { Priceconverter } from '../Components/Utils/PriceConverter';
const initialState = {
    CartProduc: [],
    TotalPrice: 0,
    Discount: 0,
    TotalAmount: 0

}

const CartProductlist = createSlice({
    name: 'CartProducts',
    initialState,
    reducers: {
        CartProductlists: (state, action) => {
            state.CartProduc = [...state.CartProduc, action.payload]


        },
        HandleBtnPlush: (state, action) => {
            let cur = current(state)
            let pQantity = cur.CartProduc.map(elm => elm.id === action.payload ? { ...elm, Quntity: elm.Quntity >= elm.stock ? elm.stock : elm.Quntity + 1 } : elm)
            state.CartProduc = pQantity
            // console.log(pQantity);
        },
        HandleBtnMin: (state, { payload }) => {
            let cur = current(state)
            let pQantity = cur.CartProduc.map(elm => elm.id === payload ? { ...elm, Quntity: elm.Quntity <= 0 ? 0 : elm.Quntity - 1 } : elm).filter(elm => elm.Quntity !== 0)
            state.CartProduc = pQantity


        },
        handleTotalPrice: (state, { payload }) => {
            let { CartProduc } = current(state)
            let updateprice = CartProduc.reduce((acc, elm) => {
                let quntityAndPrice=elm.Quntity*elm.price
                acc += quntityAndPrice
                return acc
            }, 0)
            state.TotalPrice = updateprice
        },
        // handleDiscount: (state) => {
        //     let { CartProduc, TotalPrice } = current(state)
        //     let TotalDiscount = CartProduc.reduce((acc, elm) => {
        //         acc += elm.discountPercentage
        //         return acc
        //     }, 0)
        //     // console.log(TotalPrice);
        //     // let DiscountPrice = TotalPrice * TotalDiscount / 100
        //     let DiscountPrice = 5000
        //     state.Discount =DiscountPrice
        // },
        handleTotalAmount: (state) => {
            let { Discount, TotalPrice } = current(state)
            state.TotalAmount =Priceconverter (TotalPrice - Discount)
        }



    }

})

export default CartProductlist.reducer
export const { CartProductlists, HandleBtnPlush, HandleBtnMin, handleTotalPrice, handleTotalAmount } = CartProductlist.actions