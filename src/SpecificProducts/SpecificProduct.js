import React, { useContext, useEffect, useState } from 'react'

import { fatchSpecificproduct } from '../Redux/Specificproductslice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { Button, CircularProgress, Grid, Rating, Typography } from '@mui/material';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

import { Box } from '@mui/system';
function SpecificProduct() {

  const { name } = useParams()
  let dispatch = useDispatch()
  let Specificproduct = useSelector((state) => state.Specificproduct)
  const { brand, category, description, discountPercentage, images, price, rating, stock, thumbnail, title } = Specificproduct.data
  const [sideimage, setsideimage] = useState(thumbnail)

  useEffect(() => {
    dispatch(fatchSpecificproduct(name))
  }, [name])
  useEffect(() => {
    setsideimage(thumbnail)
  }, [thumbnail])
  const handleclick = (image) => {
    setsideimage(image)
  }
  if (Specificproduct.status === 'LODING') {
    return (
      <div className='Loder'>

        <CircularProgress />

      </div>
    )
  }
  // console.log(Specificproduct.data
  // );

  return (


    <Grid container width='100%' height='79.8vh'>
      <Grid item xl={5} sm={12}>
        <Box height='100%'  >
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
            <Box height='100%' width='90%' >
              <Box display='flex' justifyContent='center' alignItems='center' height='70%' width='100%' >
                <img width='80%' height='80%' src={sideimage} alt="error" />
              </Box>
              <Box display='flex' justifyContent='center' alignItems='center' height='30%' width='100%' >
                <Button color='warning' variant='contained' sx={{ marginRight: '8px', padding: '20px', height: '30%', width: "30%", backgroundColor: '#ff9f00' }} size='large'>Add to Cart</Button>
                <Button color='warning' variant='contained' sx={{ marginLeft: '8px', padding: '20px', height: '30%', width: "30%", backgroundColor: "#fb641b" }} size='large' >Buy Now</Button>

              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xl={7} sm={12}>
        <Box height='100%' border='2px solid black' >
          <Typography variant='h5'>{title}</Typography>
          {/* <Button size='small'  disableRipple color='success' endIcon={<StarRateRoundedIcon />} variant='contained'>{rating}</Button> */}
          <Rating size='large' readOnly value={rating} />
          <Typography variant='h3'>{price}₹</Typography>
          <Typography variant='p1'>{description}</Typography>
          <Typography variant='p1' component="p">
            <VerifiedUserRoundedIcon color="success" />
            1 Year {brand}, Brand Warranty
          </Typography>
          <Typography variant='p1' component="span">



            <ChangeCircleRoundedIcon color="success" />
            30 Day Return Policy
          </Typography>
          <Typography variant='p1' component="p">

            <MonetizationOnRoundedIcon color="success" />
            Cash on Delivery available
          </Typography>

        </Box>
      </Grid>
    </Grid>


  )
}

export default SpecificProduct
{/* <div>

<p>{Specificproduct.data.title}</p>
<p>{Specificproduct.data.description}</p>
<img src={Specificproduct.data.thumbnail} alt="" />


</div> */}