import { configureStore } from "@reduxjs/toolkit";
import SpecificProductList from './SpecificProductList.js'
import Specificproduct from './Specificproductslice';
import Productcategories from './Productcategories';
const store = configureStore({
    reducer: {
        SpecificProductList: SpecificProductList,
        Specificproduct:Specificproduct,
        Productcategories:Productcategories

    }
})
export default store