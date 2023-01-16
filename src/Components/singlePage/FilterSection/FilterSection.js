import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import './FilterSection.css'
function FilterSection() {
    let navigate = useNavigate()
    let { data } = useSelector((state) => state.Productcategories)
    const [state, setstate] = useState('blue')
    function btnclcik(params) {
        navigate(`${params}`);

    }
    return (
        <>
            <Grid container width='100%' height='50%' >
                <Grid item lg={12} xs={12} md={12} sm={12} >
                    <Box sx={{ border: '1px solid black', width: "100%", height: "100%" }}>

                        <ul className='FilterSection_Link'>


                            {
                                data.map((elm, index) => {
                                    return (

                                        <NavLink  to={elm.Name} key={index} onClick={() => btnclcik(elm.Name)} >{elm.Name}</NavLink>



                                    )
                                })
                            }

                        </ul>
                    </Box>

                </Grid>

            </Grid>


        </>
    )
}

export default FilterSection
{/* <Grid item lg={12} xs={12} md={12} sm={12}>
<Box sx={{ border:'1px solid #e6e6e6' , width:'90%', height: '100%',margin:'auto',marginTop:'10px',borderRadius:'9px',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>

</Box>
</Grid>
<Grid item lg={12} xs={12} md={12} sm={12}>
<Box sx={{ border:'1px solid #e6e6e6' , width:'90%', height: '30%',margin:'auto',marginTop:'10px',borderRadius:'9px',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>

</Box>
</Grid> */}