import React from 'react'
import './Product.css'
import { context } from 'D:/Bigproject/Ecommerce/src/App';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom';

function Product(props) {

    let { } = useContext(context)
    let pdata = props.data.data
    let navigate = useNavigate()
    function btnclick(ele, id) {
        navigate(`singlepage/${props.forclick}/${ele.id}`)
        
    }

    return (
        <div className={`mainbox ${props.classname}`} >
            {
                pdata.map((ele, index) => {

                    return (


                        <div key={ele.id}
                            onClick={() => { btnclick(ele, ele.id) }} className="box">
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
