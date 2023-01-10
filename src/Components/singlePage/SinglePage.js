import React, { useContext, useEffect } from 'react'
import { context } from 'D:/Bigproject/Ecommerce/src/App';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import { CircularProgress, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import './singlePage.css'
import { Box, Stack } from '@mui/system';
import GridView from './GridView';
import { Product_view, Filterbox, User_Action, Style, Grid_Style } from './SinglePageStyle'
import ListView from './ListView';
function SinglePage() {
  const [{ products }, setproductdata] = useState([])
  let { } = useContext(context)
  let navigate = useNavigate()
  const { ID } = useParams()

  const [Grid_List, setGrid_List] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      let link = `https://dummyjson.com/products/category/${ID}`;
      const res = await axios.get(link);
      const pdata = await res.data;
      setproductdata(pdata);
    };
    fetchData();
  }, [ID]);

  return (

    <>



      <Stack direction='row' sx={Product_view} >

        <Box sx={Filterbox} >
          ok
        </Box>
        <Box width="80%" height='100%' >
          <Box sx={User_Action} >

            <Box sx={Style} >
              <Tooltip title='Grid view'>
                <IconButton className='GridViewRoundedIcon' onClick={()=>setGrid_List(true)}>

                  <GridViewRoundedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='List view'>
                <IconButton className='ReorderRoundedIcon' onClick={()=>setGrid_List(false)}>

                  <ReorderRoundedIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={Style}>
              <Typography variant='body2' component='span'>{`no of products ${products ? products.length : 0}`}</Typography>
            </Box>
            <Box sx={Style}>3</Box>
          </Box>
          <Grid sx={Grid_Style} container spacing={2}  >

            {
              products ? (
                products.map((product) => {


                  return (
                    Grid_List ?
                      <GridView key={product.id} products={product} /> : <ListView key={product.id} products={product} />


                  )
                })
              ) : (
                <div className='Loder'>

                  <CircularProgress />
                </div>
              )}


          </Grid>



        </Box>

      </Stack>



    </>





  )
}

export default SinglePage


{/* <div className='Product_view'>

</div>
<div className="Filter">
  <div className='Sort_View_filter'>
    <div className='Icon_filter'>

      <GridViewRoundedIcon className='GridViewRoundedIcon' />
      <ReorderRoundedIcon className='ReorderRoundedIcon' />

    </div>
    <div className="No_of_Products">
      <p>
        No of Products
      </p>
    </div>
    <div className="Sort_Filter">
   
     <select >
      <option value="1">all</option>
      <option value="2">Letest</option>
      <option value="3">new</option>
     </select>
    </div>
  </div>
</div> */}