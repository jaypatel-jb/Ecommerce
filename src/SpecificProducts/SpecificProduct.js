import React, { useContext, useEffect, useState } from 'react'

import { fatchSpecificproduct } from '../Redux/Specificproductslice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { CircularProgress } from '@mui/material';
function SpecificProduct() {

  const { name } = useParams()
  let dispatch = useDispatch()
  let Specificproduct = useSelector((state) => state.Specificproduct)
  useEffect(() => {
    dispatch(fatchSpecificproduct(name))
  }, [name])
  console.log(name);
  if (Specificproduct.status === 'LODING') {
    return (
      <div className='Loder'>

        <CircularProgress />

      </div>
    )
  }

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
