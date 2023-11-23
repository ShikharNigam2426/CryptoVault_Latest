import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Landing from './Component/Landing'
import Coverage from './Component/Coverage'
import Feature from './Component/Feature'
import Market from './Component/Market'
import SearchCoin from './Component/SearchCoin'
import Testimonials from './Component/Testimonials'
import OurSocials from './Component/OurSocials'
import LoginPage from './Component/Login'
// import DataTable from './Component/DataTable'  

const App = () => {
  const [Login , setLogin] = useState(false);
  const [About , setAbout] = useState(false);
  if(Login === false)
  {
    return (
      <div>
        <Navbar setLogin={setLogin} setAbout={setAbout}/>
        <hr />
        <Landing />
        <hr />
        <Coverage />
        <hr />
        <Feature />
        <hr />
        <Market />
        <hr />
        <SearchCoin />
        <hr />
        <Testimonials />
        <hr />
        <OurSocials />
      </div>
    )
  }
  if(Login === true){
    return (
      <div>
        <LoginPage setLogin={setLogin}/>
      </div>
    )
  }
  if(About === true)
  {
    return(
      <div>

      </div>
    )
  }
}

export default App