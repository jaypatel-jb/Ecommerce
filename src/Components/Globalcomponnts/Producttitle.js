import React from 'react'
import './Producttitle.css'
import { useContext } from 'react';
import { context } from 'D:/Bigproject/New folder/src/App';
import { useNavigate} from 'react-router-dom'

function Producttitle(props) {
    
    let {  } = useContext(context)
    

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
            </div>
        </>
    )
}

export default Producttitle

// {/* <div className={`main ${props.classname}`} >

// <div className="Ptitle">

//     <h1>{props.title}</h1>
//     {/* <button onClick={()=>{navigate(props.to)}}> view All</button> */}

// // </div>
// // <div className="Allproduct">
//     {/* <div className='pt1'>
// <figure>
// <img src={thumbail1[0].thumbnail} alt="Error" />
// </figure>
//     </div>
//     <div className='pt2'>
//     <figure>
// <img src={thumbail2[0].thumbnail} alt="Error" />
// </figure>
//      </div> */}
// //     <Product  classname="Full_page_product" click={props.click} productname={props.productname} />
// // </div>
// // </div> */}