import React from 'react'
import './Product.css'

import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Product(props) {

   
    let pdata = props.data.data
    let navigate = useNavigate()
    function btnclick(ele, id) {
        navigate(`singlepage/${props.forclick}/${ele.id}`)

    }
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            slidesToSlide: 1
        }
    };
    return (
        <div className={`mainbox`} >
            <Carousel responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={false}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container">


                {
                    pdata.map((ele, index) => {

                        return (


                            <div key={ele.id}
                                onClick={() => { btnclick(ele, ele.id) }} className="box">

                                <img id='img' src={ele.thumbnail} alt="error" />

                                <span  >{ele.title}</span>

                            </div>

                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Product
