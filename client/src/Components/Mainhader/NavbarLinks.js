import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";
import Error from "../error/Error";
import Pages from "../pages/Pages";
import Shop from "../shop/Shop";
import "./Mainhader.css";
import Mainhader from "./Mainhader";
import Cart from "../cart/Cart";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SinglePage from "../singlePage/SinglePage";
import SpecificProduct from "../../SpecificProducts/SpecificProduct";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import Chekout from "../cart/Chekout";

function Navbar1() {
  let { data } = useSelector((state) => state.Productcategories);
  let { IsLogin } = useSelector((state) => state.LoginSlice);
  const { CartProduc } = useSelector((state) => state.CartProductlist);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Mainhader />}>
          <Route index element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Pages" element={<Pages />} />
          <Route path="/Contact" element={<Contact />} />
          {IsLogin ? (
            <Route path="/chekout" element={<Chekout />} />
          ) : (
            <Route path="/chekout" element={<h1>Go to login page</h1>} />
          )}
          {CartProduc.length > 0 ? (
            <Route path="/Cart" element={<Cart />} />
          ) : (
            <Route path="/Cart" element={<h1>Cart is empty</h1>} />
          )}
          <Route path="*" element={<Error />} />
          <Route path="singlepage" element={<SinglePage />}>
            <Route path=":ID" element="" />
          </Route>
          {/* <Route path='singlepage/:ID/:name' element={<SpecificProduct />} >

                </Route> */}
          <Route path="singlepage/:ID" element={<SpecificProduct />}>
            <Route path=":name" element="" />
          </Route>
        </Route>
      </Routes>

      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default Navbar1;
