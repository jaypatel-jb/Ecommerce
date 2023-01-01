import { configureStore } from "@reduxjs/toolkit";
import products from './Productsslice'
import productscetegory from './ProductCategoryslice';
const store = configureStore({
    reducer: {
        product: products,
        productscetegory:productscetegory
    }
})
export default store