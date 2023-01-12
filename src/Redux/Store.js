import { configureStore } from "@reduxjs/toolkit";
import SpecificProductList from './SpecificProductList.js'
import Specificproduct from './Specificproductslice';
import Productcategories from './Productcategories';
import PriceFilter from './PriceFilterSlice';
const store = configureStore({
    reducer: {
        SpecificProductList: SpecificProductList,
        Specificproduct:Specificproduct,
        Productcategories:Productcategories,
        PriceFilter:PriceFilter

    }
})
export default store