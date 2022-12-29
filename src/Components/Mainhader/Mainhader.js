import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { context } from 'D:/Bigproject/New folder/src/App';
import { useContext } from 'react';
function Mainhader() {
    let { RouteId } = useContext(context)
  
    return (
        <>
            <Navbar />
            {/* <Outlet /> */}
            
        </>
    )
}

export default Mainhader
