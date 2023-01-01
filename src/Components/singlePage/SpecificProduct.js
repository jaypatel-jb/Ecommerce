import React, { useContext, useEffect, useState } from 'react'
import { context } from 'D:/Bigproject/Ecommerce/src/App';
import { fatchProductcategory } from 'D:/Bigproject/Ecommerce/src/Redux/ProductCategoryslice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
function SpecificProduct() {
  let { id } = useContext(context)
  const {name} = useParams()
  let dispatch = useDispatch()
  let productscetegory = useSelector((state) => state.productscetegory)
  useEffect(() => {
    dispatch(fatchProductcategory(name))
  }, [name])
console.log(name);
  return (
    <>
      {productscetegory.data ? (
        <div>

          <p>{productscetegory.data .title}</p>
          <p>{productscetegory.data .description}</p>
          <img src={productscetegory.data.thumbnail} alt="" />
        

        </div>) :<div>Loding...</div> }


    </>

  )
}

export default SpecificProduct
