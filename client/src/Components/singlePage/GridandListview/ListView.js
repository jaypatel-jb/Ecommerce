import { Button, Grid, Rating, TextField, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {Priceconverter} from '../../Utils/PriceConverter'
function ListView(props) {
    let { ID } = useParams()

    let navigate = useNavigate()
    let { brand, id, thumbnail, title, description, price, discountPercentage, rating } = props.products
    let currencyConvert=Priceconverter(price)
    const style = {
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset', borderRadius: '10px',
        height: '300px',
        display: 'flex',
        // justifyContent: 'center',
        textAlign: 'center',
        bgcolor: 'white',
        // border: '2px solid black'
    }
    const imagestyle = {
        width: '25%',
        height: '250px',
        borderRadius: '6px',
        margin: '15px 0 0 12px'

    }
    const Product_Container = {
        // border: '2px solid black',
        width: '70%',
        display: 'flex',
        justifyContent: 'end'

    }
    const Product_Detailed = {
        // border: '2px solid black',
        width: '85%',
        textAlign: 'start'
    }
    return (
        <>

            <Grid item lg={12} xs={12} md={12} sm={12}>


                <Box sx={style}  >




                    <img style={imagestyle} src={thumbnail} alt={title} />

                    <Box sx={Product_Container}>
                        <Box paddingTop='25px' sx={Product_Detailed}>

                            <Typography variant='h5' marginTop='8px' >{brand}</Typography>
                            <Rating readOnly precision={0.5} value={rating} />
                            <Typography variant='body1'>{title}</Typography>
                            <Typography marginTop='8px' variant='body1'>{description}</Typography>
                            <Typography sx={{ color: 'green' }} marginTop='8px' variant='h5'>{`${currencyConvert} ₹`}</Typography>
                            <Button variant='contained' onClick={() => {
                                navigate(`${ID}/${id}`,)
                            }} sx={{ marginTop: '30px' }} >Read More</Button>
                        </Box>

                    </Box>






                </Box>

            </Grid>
        </>
    )
}

export default ListView
