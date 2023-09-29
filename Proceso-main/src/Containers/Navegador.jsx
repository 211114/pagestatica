import React from 'react'
import { Route, Routes} from 'react-router-dom'
import HomeLanding from '../Pages/HomeLanding'
import Login from '../Components/organims/Login'
import Template from '../Components/organims/Template'
import RegistroCitas from '../Components/Molecules/RegistroCitas'
import SprintOne from '../Components/organims/SprintOne'
import SprintTwo from '../Components/organims/SprintTwo'

function Navegador() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<HomeLanding />} />
          <Route path='/grafica' element={<Template/>} />        
          <Route path='/registro' element={<RegistroCitas/>} />
          <Route path='/sprintOne'  element={<SprintOne/>} />
          <Route path='/sprintTwo'  element={<SprintTwo/>} />
          
        </Routes>
    </>
  )
}

export default Navegador