import React, { useEffect } from 'react'
import Producttitle from '../Globalcomponnts/Producttitle'
import { useContext } from 'react';
import { context } from 'D:/Bigproject/Ecommerce/src/App';
import './home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { fatchProductcategories } from 'D:/Bigproject/Ecommerce/src/Redux/Productcategories';
import { useDispatch, useSelector } from 'react-redux';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};
function Home() {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fatchProductcategories())
    // }, [])
    // let Productcategories = useSelector((state) => state.Productcategories)

    
    // let Filtercategories = Productcategories.data.slice(0, 10)
    
    let { ProductCategory } = useContext(context)

    return (
        <>
            <Carousel responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={6000}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container">

                <img id='img_1' src="/images/baner1.jpg" alt="baner-1" />
                <img id='img_2' src="/images/baner3.webp" alt="baner-2" />

            </Carousel>
            {
                ProductCategory.map((elm, index) => {

                    return (

                        <div key={elm.id}>

                            <Producttitle alldata={elm} products={elm.Name} />
                        </div>
                    )
                })
            }

            

        </>
    )
}

export default Home

