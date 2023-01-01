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

                <img src="/images/baner1.jpg" alt="" />
                <img src="/images/baner3.webp" alt="" />

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

