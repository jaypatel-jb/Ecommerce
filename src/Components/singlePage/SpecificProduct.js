import React, { useContext, useEffect, useState } from 'react'
import { context } from 'D:/Bigproject/Ecommerce/src/App';
import { fatchSpecificproduct } from '../../Redux/Specificproductslice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
function SpecificProduct() {
  let { id } = useContext(context)
  const { name } = useParams()
  let dispatch = useDispatch()
  let Specificproduct = useSelector((state) => state.Specificproduct)
  useEffect(() => {
    dispatch(fatchSpecificproduct(name))
  }, [name])
  return (
    <>
 
        <div>

          <p>{Specificproduct.data.title}</p>
          <p>{Specificproduct.data.description}</p>
          <img src={Specificproduct.data.thumbnail} alt="" />


        </div>


    </>

  )
}

export default SpecificProduct
