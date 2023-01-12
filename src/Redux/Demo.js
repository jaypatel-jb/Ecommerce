import { useSelect } from '@mui/base'
import React from 'react'
import { useSelector } from 'react-redux'


function Demo() {
    let ary = [

        { id: 1, title: 'iPhone 9', description: 'An apple mobile which is nothing like apple', price: 549, discountPercentage: 12.96, },

        { id: 2, title: 'iPhone X', description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD di…lay with OLED technology A12 Bionic chip with ...', price: 899, discountPercentage: 17.94, },

        { id: 3, title: 'Samsung Universe 9', description: "Samsung's new variant which goes beyond Galaxy to the Universe", price: 1249, discountPercentage: 15.46, },

        { id: 4, title: 'OPPOF19', description: 'OPPO F19 is officially announced on April 2021.', price: 280, discountPercentage: 17.91, },
        { id: 5, title: 'Huawei P30', description: 'Huawei’s re-badged P30 Pro New Edition was officia…ny and now the device has made its way to the UK.', price: 499, discountPercentage: 10.58, }


    ]

    const ProductsList = useSelector((state) => state.SpecificProductList)
    const Producfilterlist = useSelector((state) => state.PriceFilter)
    let { products } = ProductsList.data
    let ary2 = products
    const Sortbyhigh = (a, b) => {
        return b.price - a.price
    }
    const Sortbylow = (a, b) => {
        return b.price - a.price
    }
  
    if (products) {

     
        // console.log([...ary2].sort(Sortbyhigh));
        // console.log([...ary2].sort(Sortbylow));
    }
    console.log(Producfilterlist);
    return (
        <div>

        </div>
    )
}


export default Demo
