import { configureStore } from "@reduxjs/toolkit";
import SpecificProductList from './SpecificProductList.js'
import Specificproduct from './Specificproductslice';
import Productcategories from './Productcategories';
import PriceFilter from './PriceFilterSlice';
import InterestedProduc from './InterestedProducslice';
import CartProductlist from './CartSlice';
const store = configureStore({
    reducer: {
        SpecificProductList: SpecificProductList,
        Specificproduct: Specificproduct,
        Productcategories: Productcategories,
        PriceFilter: PriceFilter,
        InterestedProduc: InterestedProduc,
        CartProductlist: CartProductlist

    }
})
export default store