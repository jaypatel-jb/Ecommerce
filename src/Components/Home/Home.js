import React from 'react'
import Producttitle from '../Globalcomponnts/Producttitle'
import { useContext } from 'react';
import { context } from 'D:/Bigproject/Ecommerce/src/App';
import './home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
function Home() {
  
    let {ProductCategory } = useContext(context)

    return (
        <>

            <div className="slider">
               <Carousel responsive={responsive}>


                    <figure id='i1'>
                        <img src="/images/ShopNow.png" alt="" />

                    </figure>
                    <figure id='i2'>

                        <img src="/images/Menhad.png" alt="" />
                    </figure>
                
               </Carousel>
            </div>
           

            {
                ProductCategory.map((elm,index) => {
            
                    return (

                        <div key={elm.id}>

                            <Producttitle products={elm.Name} />
                        </div>
                    )
                })
            }



        </>
    )
}

export default Home