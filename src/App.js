
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import NavbarLinks from './Components/Mainhader/NavbarLinks';
import './Components/Section/Section.css'
import ProductCategory from './Components/Data/ProductCategory'
import { useDispatch } from 'react-redux';
import { getproductcategories } from './Redux/Productcategories'



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getproductcategories(ProductCategory))
  }, [ProductCategory])
  const [ShowandHide, setShowandHide] = useState(true)



  function loginbtn(e) {
    setShowandHide(e)
  }




  return (
    <>
          {ShowandHide ? <NavbarLinks /> :
            <Login login={loginbtn} />}
    </>
  );
}

export default App;
