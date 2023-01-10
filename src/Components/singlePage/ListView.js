import { Grid, Tooltip } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom';
function ListView(props) {
    let navigate = useNavigate()
    let { brand, id, thumbnail, title, description, price, discountPercentage, rating } = props.products

    const style = {
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset', borderRadius: '10px',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        bgcolor: 'white'
    }
    const imagestyle = {
        width: '100%',
        height: '210px',
        borderRadius: '6px',

    }
    return (
        <>
        
            <Grid item lg={12} xs={12} md={12} sm={12}>
                <Tooltip arrow title={title}>

                    <Box sx={style}  >



                        <div key={id} >

                            <img style={imagestyle} onClick={() => {
                                navigate(`${id}`,)
                            }} src={thumbnail} alt={title} />
                            <p>{title}</p>


                        </div>




                    </Box>
                </Tooltip>
            </Grid>
        </>
    )
}

export default ListView
