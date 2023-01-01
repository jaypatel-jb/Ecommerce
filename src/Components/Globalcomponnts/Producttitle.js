import React from 'react'
import './Producttitle.css'
import { useNavigate } from 'react-router-dom'
import Product from './Product';
function Producttitle(props) {



    let navigate = useNavigate()


    function btnclick() {

        navigate(`singlepage/${props.products}`);



    }

    
    return (
        <>
            <div className={`main ${props.classname}`} >

                <div className="Ptitle">

                    <h1>{props.products}</h1>
                    <img src={props.products.image} alt="error" />
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