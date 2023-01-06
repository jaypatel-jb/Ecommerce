import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Blog from '../blog/Blog';
import Contact from '../contact/Contact';
import Error from '../error/Error';
import Pages from '../pages/Pages';
import Shop from '../shop/Shop';
import './Mainhader.css'
import Mainhader from './Mainhader';
import Cart from '../cart/Cart';
import Home from '../Home/Home';

import SinglePage from '../singlePage/SinglePage';
import SpecificProduct from '../singlePage/SpecificProduct';
import Footer from '../Footer/Footer';



function Navbar1() {


    return (
        <BrowserRouter>
            <Mainhader />
            <Routes>

                <Route index element={<Home />} />
                <Route path='/Shop' element={<Shop />} />
                <Route path='/Blog' element={<Blog />} />
                <Route path='/Pages' element={<Pages />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='*' element={<Error />} />
                <Route path='singlepage/:ID' element={<SinglePage />} />
                <Route  path='singlepage/:ID/:name' element={<SpecificProduct />} />





            </Routes>

        <Footer/>
        </BrowserRouter>

    )
}

export default Navbar1
