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
import GridView from './GridandListview/GridView';
import { Product_view, Filterbox, User_Action, Style, Grid_Style } from './SinglePageStyle'
import ListView from './GridandListview/ListView';
import { useDispatch, useSelector } from 'react-redux';
import FilterSection from './FilterSection/FilterSection';
import CategoryIcon from '@mui/icons-material/Category';

function SinglePage() {

  // * ..................................................................Redux data...........................................................//
  const ProductsList = useSelector((state) => state.SpecificProductList)
  const { Producfilterlist } = useSelector((state) => state.PriceFilter)
  const dispatch = useDispatch()
  const { products } = ProductsList.data
  // *...................................................................Navigate.............................................................//
  let navigate = useNavigate()
  const { ID } = useParams()

  // *...................................................................<STATE & VER>................................................................//
  const [Grid_List, setGrid_List] = useState(true)
  const [select_Menu, setselect_Menu] = useState('All')
  const [Branddata, setbranddata] = useState([])

  let innerHeight = window.innerHeight
  let innerWidth = window.innerWidth
  console.log(innerWidth);
  // *...................................................................<LOGIC>................................................................//

  function handleMenu(e) {
    setselect_Menu(e.target.value)
  }
  // console.log(Producfilterlist);


  useEffect(() => {
    if (Branddata) {
      if (select_Menu === 'All') {
        dispatch(SelectAll(Branddata))
      } if (select_Menu === "Low") {
        dispatch(Selectlow(Branddata))
      }
      if (select_Menu === "High") {
        dispatch(selectHigh(Branddata))
      }
    }
  }, [select_Menu, Branddata])

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
  function branddata(data) {
    setbranddata(data)
  }
  // function sliderdataArray(data) {

  // }


  return (

    <>



      <Grid container justifyContent='space-around' display='flex' sx={Product_view} >

        <Grid item sx={Filterbox} lg={3} xs={12} md={3} sm={12} >
          <FilterSection branddata2={branddata} />

        </Grid>
        <Grid item  lg={8} md={8}>
          <Box sx={User_Action} >

            <Box sx={Style} >
              <Tooltip title='Grid view'>
                <IconButton className='GridViewRoundedIcon' onClick={() => setGrid_List(true)}>

                  <GridViewRoundedIcon />
                </IconButton>
              </Tooltip>
              {
                innerWidth <=902 ?null:
                <Tooltip title='List view'>
                  <IconButton className='ReorderRoundedIcon' onClick={() => setGrid_List(false)}>

                    <ReorderRoundedIcon />
                  </IconButton>
                </Tooltip>
              }
            </Box>
            <Box color='GrayText' sx={Style}>
              <Typography variant='body1' component='span'>{`No of products ${Branddata ? Branddata.length : 0}`}</Typography>
            </Box>
            <Box sx={Style}>
              <FormControl sx={{ minWidth: 95, }} size="small">
                <InputLabel id='select'>Price</InputLabel>
                <Select onChange={handleMenu} value={select_Menu} fullWidth labelId='select' label="Price" id='select-lable'>
                  <MenuItem value='All' >Reset</MenuItem>
                  <MenuItem value='Low' >Low-High</MenuItem>
                  <MenuItem value='High'>High-Low</MenuItem>

                </Select>
              </FormControl>
            </Box>
          </Box>
          <Grid sx={Grid_Style} container spacing={2} width='100%' height='50%' border='2px solid black' >

            {
              Producfilterlist ? (
                Producfilterlist.map((product) => {


                  return (
                    Grid_List ?
                      <GridView key={product.id} products={product} /> :  <ListView key={product.id} products={product} />


                  )
                })
              ) : null}


          </Grid>



        </Grid>

      </Grid>



    </>





  )
}

export default SinglePage
