import React, { useContext, useEffect } from 'react'
import { context } from 'D:/Bigproject/Ecommerce/src/App';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { CircularProgress, LinearProgress } from '@mui/material';
import './singlePage.css'

function SinglePage() {
  const [productdata, setproductdata] = useState([])
  let { } = useContext(context)
  let navigate = useNavigate()
  const { ID} = useParams()


  useEffect(() => {
    const fetchData = async () => {
      let link = `https://dummyjson.com/products/category/${ID}`;
      const res = await axios.get(link);
      const pdata = await res.data;
      setproductdata(pdata);
    };
    fetchData();
  }, [ID]);

  return (

    <>

      {productdata.products ? (
        productdata.products.map((data) => {
          return (
            <div key={data.id}>
              <p>ok</p>
              <img onClick={() => {
                navigate(`${data.id}`,)
              }} src={data.thumbnail} alt={data.title} />
              <p>{data.title}</p>
              <p>{data.description}</p>
              <p>{data.price}</p>
              <p>{data.discountPercentage}</p>
              <p>{data.rating}</p>
              <p>{data.brand}</p>
              <br />
            </div>

          )
        })
      ) : (
        <div className='Loder'> 

        <CircularProgress/>
        </div>
      )}
  
    </>





  )
}

export default SinglePage