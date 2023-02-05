import React, { useCallback, useContext, useEffect, useState } from 'react'
import { fatchSpecificproduct } from '../Redux/Specificproductslice'
import { useDispatch, useSelector } from 'react-redux'
import { InterestedProducList } from '../Redux/InterestedProducslice';
import { CartProductlists, CartLength } from '../Redux/CartSlice'
import { useNavigate, useParams } from 'react-router';
import { Alert, Button, CircularProgress, Grid, LinearProgress, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CheckCircle } from '@mui/icons-material';


function SpecificProduct() {
  //*.......................................................................REDUXDATA.............................................................//


  let Specificproduct = useSelector((state) => state.Specificproduct)
  let interestedproduct = useSelector((state) => state.InterestedProduc)
  const { brand, category, description, discountPercentage, images, price, rating, stock, thumbnail, title } = Specificproduct.data




  //*........................................................................VARIABLE.............................................................//


  let navigate = useNavigate()
  const { name } = useParams()
  let dispatch = useDispatch()
  let interastedproducarray;
  let convertJasonString = interestedproduct.InterestedProduclist.map(elm => JSON.stringify(elm))
  let RemoveDuplicatobj = new Set(convertJasonString)
  let interastedProduct = [...RemoveDuplicatobj].map(elm => JSON.parse(elm))
  let cartQuntity = Object.assign({}, Specificproduct.data, { Quntity: 1 })
  const CartProductlist = useSelector(state => state.CartProductlist)


  //*........................................................................STATE................................................................//



  const [sideimage, setsideimage] = useState(thumbnail)
  const [Cartloder, setCartloder] = useState(false)
  const [CartItemalradyloder, setCartItemalradyloder] = useState(false)



  //*.........................................................................HOOKS...............................................................//
  useEffect(() => {
    dispatch(fatchSpecificproduct(name))
  }, [name])
  useEffect(() => {
    setsideimage(thumbnail)
  }, [thumbnail])
  const handleclick = (image) => {
    setsideimage(image)
  }

  useEffect(() => {
    dispatch(InterestedProducList(interastedproducarray))
  }, [interastedproducarray])
  //*....................................................................LOGIC...........................................................//
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
      items: 2,
      slidesToSlide: 1
    }
  };




  if (Specificproduct.data.length !== 0) {
    interastedproducarray = Specificproduct.data

  }






  function handleinterastedProducts(id) {
    navigate(`${id}`)
  }


  // console.log(cartQuntity);
  function handleAddtocart() {
    if (CartProductlist.CartProduc.map(elm => elm.id).includes(cartQuntity.id)) {
      setTimeout(() => {
        setCartItemalradyloder(false)

      }, 2500)
      setCartItemalradyloder(true)
    } else {

      setTimeout(() => {
        setCartloder(false)

      }, 2500)

      dispatch(CartProductlists(cartQuntity))
      setCartloder(true)
    }
  }

  if (Specificproduct.status === 'LODING') {
    return (
      <div className='Loder'>

        <CircularProgress />

      </div>
    )
  }
  // console.log(RemoveDuplicatcart2);
  return (
    <>

      <Box width='100%' height='56px' >


        {Cartloder ? <Alert icon={<CheckCircle sx={{ color: 'Background' }} />} sx={{ backgroundColor: '#5cb85c' }} >product added successfully!</Alert> : null}
        {Cartloder ? <LinearProgress color='success' /> : null}
        {CartItemalradyloder ? <Alert variant='filled' severity='warning'  >product already in cart</Alert> : null}
        {CartItemalradyloder ? <LinearProgress color='warning' /> : null}
      </Box>
      <Grid container width='100%' height='100vh'  >
        <Grid item xl={5} sm={12}  >
          <Box height='100%'   >
            <Box display='flex' height="95%" margin='20px'   >
              <Box height='60%' width='10%' >
                {
                  images ? images.map((elm) => {
                    return (
                      <img onClick={() => handleclick(elm)} style={{ width: '100%', height: '20%', cursor: "pointer" }} key={elm} src={elm} alt='image not found' />
                    )
                  }) : null
                }
              </Box>
              <Box height='100%' width='90%'  >
                <Box display='flex' justifyContent='center' alignItems='center' height='70%' width='100%'  >
                  <img width='75%' height='85%' src={sideimage} alt="error" />
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' height='30%' width='100%' >
                  <Button onClick={handleAddtocart} color='warning' variant='contained' sx={{ marginRight: '8px', padding: '20px', height: '30%', width: "80%", backgroundColor: '#ff9f00' }} size='large'>Add to Cart</Button>
                  {/* <Button color='warning' variant='contained' sx={{ marginLeft: '8px', padding: '20px', height: '30%', width: "30%", backgroundColor: "#fb641b" }} size='large' >Buy Now</Button> */}

                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={7} sm={12} >
          <Box height='100%'  >
            <Typography my={3} variant='h4'>{title}</Typography>
            {/* <Button size='small'  disableRipple color='success' endIcon={<StarRateRoundedIcon />} variant='contained'>{rating}</Button> */}
            <Rating size='large' readOnly value={rating} />
            <Box display='flex' alignItems='center'>

              <Typography my={2} component='span' variant='h3'>{price}₹</Typography>
              <Typography sx={{ textDecoration: 'line-through', color: '#878787' }} my={2} mx={3} component='span' variant='h5'>{price + 20}₹</Typography>
            </Box>
            <Typography my={2} variant='h6'> {description}</Typography>
            <Typography display='flex' alignItems='center' marginTop={2} variant='p1' component="p">
              <VerifiedUserRoundedIcon sx={{ marginTop: '5px' }} color="success" />
              1 Year {brand}, Brand Warranty
            </Typography>
            <Typography variant='p1' marginTop={2} display='flex' alignItems='center' component="span">



              <ChangeCircleRoundedIcon color="success" />
              30 Day Return Policy
            </Typography>
            <Typography variant='p1' marginTop={2} display='flex' alignItems='center' component="p">

              <MonetizationOnRoundedIcon color="success" />
              Cash on Delivery available
            </Typography>
            <Typography my={4} variant='h5'> Product Details</Typography>
            <Typography variant='p1' my={1} component='p'> Name: {title}</Typography>
            <Typography variant='p1' my={1} component='p'> Brand: {brand}</Typography>
            <Typography variant='p1' my={1} component='p'> Category: {category}</Typography>
            <Typography variant='p1' my={1} component='p'> Rating: {rating}</Typography>
            <Typography textAlign='justify' variant='p1' my={1} marginRight={2} component='p'> Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos odio inventore. Odit esse corrupti molestias totam ut rerum consequuntur at suscipit nostrum facilis iste, ducimus nisi dolor delectus ea nihil inventore, quos recusandae assumenda iusto dolores. Excepturi, ea soluta! </Typography>


          </Box>
        </Grid>


        <Box width='100%' height='100%'>
          <Typography mx={5} variant='h5'> You might be interested in</Typography>
          <Box  >
            <Carousel responsive={responsive}
              swipeable={true}
              draggable={false}
              infinite={false}
              autoPlay={false}
              autoPlaySpeed={false}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              containerClass="carousel-container">

              {
                interastedProduct.map(ele => {
                  return (
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' key={ele.id}>

                      <img onClick={() => handleinterastedProducts(ele.id)} style={{ width: '60%', height: '60%', borderRadius: '5px' }} src={ele.thumbnail} alt="error" />

                      <span  >{ele.title}</span>

                    </Box>
                  )
                })
              }

            </Carousel>
          </Box>
        </Box>

      </Grid>

    </>
  )
}

export default SpecificProduct

 // let RemoveDuplicatcart = CartProductlist.CartProduc.map(elm => JSON.stringify(elm));
  // let RemoveDuplicatcart1 = JSON.stringify(cartQuntity)