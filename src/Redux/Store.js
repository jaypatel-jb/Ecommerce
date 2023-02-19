import { configureStore } from "@reduxjs/toolkit";
import SpecificProductList from "./SpecificProductList.js";
import Specificproduct from "./Specificproductslice";
import Productcategories from "./Productcategories";
import PriceFilter from "./PriceFilterSlice";
import InterestedProduc from "./InterestedProducslice";
import CartProductlist from "./CartSlice";
import LoginSlice from "./LoginSlice";
const store = configureStore({
  reducer: {
    SpecificProductList,
    Specificproduct,
    Productcategories,
    PriceFilter,
    InterestedProduc,
    CartProductlist,
    LoginSlice,
  },
});
export default store;
