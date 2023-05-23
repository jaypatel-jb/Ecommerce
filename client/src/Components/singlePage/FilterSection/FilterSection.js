import {
  Alert,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Slider,
  Typography,
  Snackbar,
  Slide,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { Priceconverter } from "../../Utils/PriceConverter";
import "./FilterSection.css";

function FilterSection({ branddata2 }) {
  // * ..................................................................Redux data...........................................................//

  let { data } = useSelector((state) => state.Productcategories);
  const ProductsList = useSelector((state) => state.SpecificProductList);
  // *...................................................................<STATE & VER>........................................................//
  let bd;
  let navigate = useNavigate();
  let branddata = ProductsList.data;
  let Brandarry = branddata ? branddata.map((elm) => elm.brand) : [];
  let brand = [...new Set(Brandarry)];
  const [state, setstate] = useState([]);
  const [checkAll, setcheckAll] = useState(true);
  const [open, setOpen] = React.useState(false);
  if (branddata) {
    bd = branddata.filter((elm) => state.includes(elm.brand));
  }

  let maxpriceArray = branddata ? branddata.map((elm) => elm.price) : [];

  let maxprice = Math.max(...maxpriceArray);
  let minprice = Math.min(...maxpriceArray);

  const [Slidervalue, setSlider] = useState([minprice, maxprice]);
  let datalength2 = bd ? bd.length : 0;
  let pricerange =
    datalength2 === 0
      ? branddata
      : bd.filter(
          (elm) => elm.price >= Slidervalue[0] && elm.price <= Slidervalue[1]
        );

  // *...................................................................NAVIGATE..............................................................//

  function btnclcik(params) {
    navigate(`${params}`);
  }

  // *...................................................................CKECKEBOOX..............................................................//
  function handalcheked(e, item) {
    state.includes(item)
      ? setstate(state.filter((i) => i !== item))
      : setstate([...state, item]);
    setcheckAll(false);
  }
  function handalchekedall(event) {
    setcheckAll(event.target.checked);
  }

  useEffect(() => {
    checkAll ? setstate(brand) : setstate([]);
  }, [checkAll]);

  let datalength = bd ? bd.length : 0;
  useEffect(() => {
    datalength === 0 ? setOpen(true) : setOpen(false);
  }, [bd]);

  // *...................................................................SLIDER..............................................................//
  useEffect(() => {
    branddata2(pricerange);
  }, [Slidervalue, state]);

  function handleSliderChange(e, newvalue) {
    setSlider(newvalue);
  }
  //   console.log(checkAll);

  return (
    <>
      <Grid container width="90%">
        <Typography
          marginTop="8px"
          alignSelf="start"
          marginLeft="10px"
          variant="h5"
        >
          Category
        </Typography>
        <Grid item lg={12} xs={12} md={12} sm={12}>
          <Box sx={{ width: "100%", height: " fit-content" }}>
            <ul className="FilterSection">
              {data.Data?.map((elm, index) => {
                return (
                  <NavLink
                    className="FilterSection_Link"
                    to={elm.Name}
                    key={index}
                    onClick={() => btnclcik(elm.Name)}
                  >
                    {elm.Name}
                  </NavLink>
                );
              })}
            </ul>
            <hr />
          </Box>
        </Grid>
        <Grid item lg={12} xs={12} md={12} sm={12}>
          <Typography
            marginTop="8px"
            alignSelf="start"
            marginLeft="10px"
            variant="h5"
          >
            Brand
          </Typography>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="All"
                  checked={checkAll}
                  onChange={handalchekedall}
                />
              }
              label="All"
            ></FormControlLabel>
            {brand ? (
              brand.map((elm) => {
                return (
                  <FormControlLabel
                    key={elm}
                    control={
                      <Checkbox
                        value={elm.id}
                        checked={state.includes(elm)}
                        name={elm}
                        onChange={(e) => handalcheked(e, elm)}
                      />
                    }
                    label={elm}
                  ></FormControlLabel>
                );
              })
            ) : (
              <h1>Loding...</h1>
            )}
          </FormGroup>
          <hr />
        </Grid>
        <Grid item lg={12} xs={12} md={12} sm={12}>
          <Typography variant="h6">Price</Typography>
          <Box width="100%" height="50%">
            <Slider
              value={Slidervalue}
              min={minprice}
              max={maxprice}
              onChange={handleSliderChange}
              disableSwap
              valueLabelDisplay="auto"
            />
          </Box>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={3000}>
        <Alert variant="filled" severity="warning">
          please select at least one Brand
        </Alert>
      </Snackbar>
    </>
  );
}

export default FilterSection;
{
  /* <Grid item lg={12} xs={12} md={12} sm={12}>
<Box sx={{ border:'1px solid #e6e6e6' , width:'90%', height: '100%',margin:'auto',marginTop:'10px',borderRadius:'9px',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>

</Box>
</Grid>
<Grid item lg={12} xs={12} md={12} sm={12}>
<Box sx={{ border:'1px solid #e6e6e6' , width:'90%', height: '30%',margin:'auto',marginTop:'10px',borderRadius:'9px',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>

</Box>
</Grid> */
}
// console.log(state['Apple','Samsung']);
