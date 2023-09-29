import React from 'react'
import HomeLanding from '../Pages/HomeLanding'
import Footer from '../Components/organims/Footer'
import Login from '../Components/organims/Login'
import { useState } from 'react'
import Navegador from './Navegador'
import Template from '../Components/organims/Template'



function App() {

  const [user, setUser] = useState([])

  return (
    <>
      {/* <HomeLanding /> */}
      {/* {
        !user.length > 0 
        ? <Login setUser={setUser}/>
        :   <Navegador/>
      }  */}
      <Navegador />
      {/* <Template/> */}
      
    </>
  )
}

export default App