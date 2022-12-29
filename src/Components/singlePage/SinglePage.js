import React, { useEffect } from 'react'
// import { context } from 'D:/Bigproject/Ecommerce/src/App';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function SinglePage() {
  const [productdata, setproductdata] = useState([])
  // let { } = useContext(context)
  const { ID } = useParams()

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
              <img src={data.thumbnail} alt={data.title} />
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
        <p>Loding...</p>
      )}
    </>





  )
}

export default SinglePage