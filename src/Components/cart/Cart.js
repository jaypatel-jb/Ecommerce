import { Button, Grid, Rating, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Priceconverter } from '../Utils/PriceConverter'
function Cart() {
  const CartProductlist = useSelector(state => state.CartProductlist)
  let copy = [...CartProductlist.CartProduc]
  const [Quntity, setQuntity] = useState(copy)
  
  const HandleBtnPlush = (productID) => {

    let pQantity = Quntity.map(elm=>elm.id === productID ? { ...elm, Quntity: elm.Quntity >= elm.stock ? elm.stock : elm.Quntity + 1 } : elm)
    setQuntity(pQantity)


  }
 
  const HandleBtnMin = (productID) => {
    let pQantity=Quntity.map(elm=>elm.id===productID?{...elm, Quntity:elm.Quntity <= 1?1:elm.Quntity - 1}:elm)
    setQuntity(pQantity)
 
  }

  return (
    <>

      <Grid margin={0} padding={0} container width='100%' height='100vh' spacing={6} bgcolor='#ebebeb' border='2px solid black'>
        <Grid item xl={8}>

          <Box overflow='scroll' marginTop={3} bgcolor='white' boxShadow='rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset' width='100%' height='80vh' >

            {
              Quntity.map(elm => {
                let currencyConvert = Priceconverter(elm.price)
                return (
                  <React.Fragment key={elm.id}  >

                    <Box width='100%' height='300px' bgcolor='Background' display='flex'  >
                      <Box width='30%' height='100%' display='flex' justifyContent='center' alignItems='center'>
                        {/* <img /> */}
                        <Typography component='img' width='250px' height='250px' marginTop='5px' src={elm.thumbnail} alt={elm.title} />
                      </Box>
                      <Box width='70%' height='100%' >
                        <Box marginLeft={2} marginTop={2} width="95%" height='100%' display='flex' flexDirection='column' >
                          <Box width='100%' height='70%'>

                            <Typography variant='h5' marginTop='8px' >{elm.brand}</Typography>
                            <Rating readOnly precision={0.5} value={elm.rating} />
                            <Typography variant='body1'>{elm.title}</Typography>
                            <Typography marginTop='8px' variant='body1'>{elm.description}</Typography>
                            <Typography sx={{ color: 'green' }} marginTop='8px' variant='h5'>{`${currencyConvert} ₹`}</Typography>
                          </Box>
                          <Box marginTop='10px' >
                            <Button onClick={() => HandleBtnPlush(elm.id)} variant='outlined'>+</Button>
                            <span style={{ margin: '10px' }}>{elm.Quntity}</span>
                            <Button onClick={() => HandleBtnMin(elm.id)} variant='outlined'>-</Button>

                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <hr />
                  </React.Fragment>
                )
              })
            }
          </Box>
        </Grid>
        <Grid item xl={4} justifyContent='center'>
          <Box marginTop={3} bgcolor='white' boxShadow='rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset' width='90%' height='80vh' borderRadius='8px 8px 8px 8px' ></Box>

        </Grid>
      </Grid>

    </>
  )
}

export default Cart
  // console.log(CartProductlist.CartProduc
  // );
  // localStorage.setItem('cartData', JSON.stringify(CartProductlist1.CartProduc))
  // const CartProductlist = JSON.parse(localStorage.getItem('cartData'))


  //add logic
      
    // let pQantity = Quntity.map(elm => {

    //   if (elm.id === productID) {
    //     if (elm.Quntity >= elm.stock) {
    //       return {
    //         ...elm,
    //         Quntity: elm.stock
    //       }
    //     }
    //     return {
    //       ...elm,
    //       Quntity: elm.Quntity + 1
    //     }

    //   }
    //   return elm
    // })
    // setQuntity(pQantity)