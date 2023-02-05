import React from 'react'
import './Producttitle.css'
import { useNavigate } from 'react-router-dom'
import Product from './Product';
import { Typography } from '@mui/material';
function Producttitle(props) {




    let navigate = useNavigate()


    function btnclick() {

        navigate(`singlepage/${props.products}`);



    }


    return (
        <>
            <div className={`main ${props.classname}`} >

                <div className="Ptitle">
                    <Typography variant='h5' >{props.products}</Typography>
                    {/* <img src={props.products.image} alt="error" /> */}
                    <button onClick={btnclick}> view All</button>

                </div>
                <div className="Allproduct">
                    <Product forclick={props.products} data={props.alldata} />
                </div>
            </div>
        </>
    )
}

export default Producttitle