
import { createContext } from 'react';
import { useState } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import NavbarLinks from './Components/Mainhader/NavbarLinks';
import './Components/Section/Section.css'
import ProductCategory from './Components/Data/ProductCategory'
import { Provider } from 'react-redux';
import store from './Redux/Store';
export const context = createContext()


function App() {

  const [ShowandHide, setShowandHide] = useState(true)

  

  function loginbtn(e) {
    setShowandHide(e)
  }




  return (
    <>
      <context.Provider value={{  ProductCategory }}>
        <Provider store={store}>

          {ShowandHide ? <NavbarLinks /> :
            <Login login={loginbtn} />}


        </Provider>
      </context.Provider>
    </>
  );
}

export default App;
