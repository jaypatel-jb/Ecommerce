import Producttitle from '../Globalcomponnts/Producttitle'
import './home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';


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

    let Productcategories = useSelector((state) => state.Productcategories)




    return (
        <>

                <Carousel responsive={responsive}
                    swipeable={true}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={6000}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    containerClass="carousel-container">



                    <img id='img_2' src="/images/baner3.webp" alt="baner-2" />
                    <img id='img_1' src="/images/baner1.jpg" alt="baner-1" />

                </Carousel>
  
            {
                Productcategories ? Productcategories.data
                    .map((elm, index) => {

                        return (

                            <div key={elm.id}>

                                <Producttitle alldata={elm} products={elm.Name} />
                            </div>
                        )
                    }) : ''
            }



        </>
    )
}

export default Home

