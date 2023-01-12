import React, { useContext, useEffect } from 'react'
import { context } from 'D:/Bigproject/Ecommerce/src/App';
import { useNavigate, useParams } from 'react-router-dom';
import { fatchproductlist } from '../../Redux/SpecificProductList'
import { useState } from 'react';
import { SelectAll, Selectlow, selectHigh } from '../../Redux/PriceFilterSlice'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import { CircularProgress, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Tooltip, Typography } from '@mui/material';
import './singlePage.css'
import { Box, Stack } from '@mui/system';
import GridView from './GridView';
import { Product_view, Filterbox, User_Action, Style, Grid_Style } from './SinglePageStyle'
import ListView from './ListView';
import { useDispatch, useSelector } from 'react-redux';


function SinglePage() {

  //  ..................................................................Redux data...........................................................//

  const ProductsList = useSelector((state) => state.SpecificProductList)
  const { Producfilterlist } = useSelector((state) => state.PriceFilter)
  const dispatch = useDispatch()
  const { products } = ProductsList.data
  // *...................................................................Navigate.............................................................//
  let navigate = useNavigate()
  const { ID } = useParams()

  // *...................................................................STATE................................................................//
  const [Grid_List, setGrid_List] = useState(true)
  const [select_Menu, setselect_Menu] = useState('All')

  function handleMenu(e) {
    setselect_Menu(e.target.value)
  }



  useEffect(() => {
    if (products) {
      if (select_Menu === 'All') {
        dispatch(SelectAll(products))
      } if (select_Menu === "Low") {
        dispatch(Selectlow(products))
      }
      if (select_Menu === "High") {
        dispatch(selectHigh(products))
      }
    }
  }, [select_Menu, products])

  useEffect(() => {

    dispatch(fatchproductlist(ID))
  }, [ID,]);


  if (ProductsList.status === 'LODING') {
    return (
      <div className='Loder'>

        <CircularProgress />
      </div>
    )
  }
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
                <IconButton className='GridViewRoundedIcon' onClick={() => setGrid_List(true)}>

                  <GridViewRoundedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='List view'>
                <IconButton className='ReorderRoundedIcon' onClick={() => setGrid_List(false)}>

                  <ReorderRoundedIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <Box color='GrayText' sx={Style}>
              <Typography variant='body1' component='span'>{`No of products ${products ? products.length : 0}`}</Typography>
            </Box>
            <Box sx={Style}>
              <FormControl sx={{ minWidth: 95, }} size="small">
                <InputLabel id='select'>Sort by</InputLabel>
                <Select onChange={handleMenu} value={select_Menu} fullWidth labelId='select' label="Sort by" id='select-lable'>
                  <MenuItem value='All' >All</MenuItem>
                  <MenuItem value='Low' >Low-High</MenuItem>
                  <MenuItem value='High'>High-Low</MenuItem>

                </Select>
              </FormControl>
            </Box>
          </Box>
          <Grid sx={Grid_Style} container spacing={2}  >

            {
              Producfilterlist ? (
                Producfilterlist.map((product) => {


                  return (
                    Grid_List ?
                      <GridView key={product.id} products={product} /> : <ListView key={product.id} products={product} />


                  )
                })
              ) : null}


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