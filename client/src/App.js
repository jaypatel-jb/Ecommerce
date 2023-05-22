import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import NavbarLinks from "./Components/Mainhader/NavbarLinks";
import "./Components/Section/Section.css";
import ProductCategory from "./Components/Data/ProductCategory";
import { useDispatch, useSelector } from "react-redux";
import { fatchProductcategories } from "./Redux/Productcategories";

function App() {
  const { IsLogin, Email, Password } = useSelector((state) => state.LoginSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fatchProductcategories());
  }, [dispatch]);

  return <NavbarLinks />;
}

export default App;
