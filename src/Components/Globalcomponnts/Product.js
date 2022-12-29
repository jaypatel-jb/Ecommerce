import React, { useState } from 'react'
import './Product.css'
import { context } from 'D:/Bigproject/Demo Ecommerce/src/App';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Product(props) {
    let { btnbox, data, } = useContext(context)


    let navigate = useNavigate()



    return (
        <div className={`mainbox ${props.classname}`} >
            {
                props.productname.map((ele, index) => {

                    return (


                        <div key={ele.id}
                            onClick={() => {
                                navigate(`singlepage/${ele.title}`);
                                btnbox(ele)

                            }} className="box">
                            <div className="image">
                                <img src={ele.thumbnail} alt="error" />
                            </div>
                            <span  >{ele.title}</span>

                        </div>

                    )
                })
            }
        </div>
    )
}

export default Product
