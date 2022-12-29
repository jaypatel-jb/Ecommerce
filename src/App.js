
import { createContext} from 'react';
import { useState } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import NavbarLinks from './Components/Mainhader/NavbarLinks';
import './Components/Section/Section.css'
import ProductCategory from './Components/Data/ProductCategory'

export const context = createContext()


function App() {

  const [ShowandHide, setShowandHide] = useState(true)
  const [data, setdata] = useState('')
 




 
  function loginbtn(e) {
    setShowandHide(e)
  }

  
  let btnbox = (e) => {
    setdata(e)
  }



  
  return (
    <>
      <context.Provider value={{ btnbox, data,ProductCategory }}>

        {ShowandHide ? <NavbarLinks /> :
          <Login login={loginbtn} />}

      </context.Provider>
    </>
  );
}

export default App;
