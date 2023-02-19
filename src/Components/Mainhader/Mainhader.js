import React from 'react'
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
function Mainhader() {
  
    return (
        <>
            <Navbar />
            <Outlet />
            
        </>
    )
}

export default Mainhader
