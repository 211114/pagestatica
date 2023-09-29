import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../atoms/Button'
import '../../assets/Styles/Navbar.css'

function Navbar() {


  return (
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            {/* <a class="navbar-brand" href="#">Galaxia</a> */}
            <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon icono"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <a class="navbar-brand title" href="#">Medilab</a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        
                        <Link exact to="/home" className='link'><a class="nav-link" href="#">HOME</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link exact to="/grafica" className='link'><a class="nav-link" href="#">GRAFICAS</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/registro" className='link'><a class="nav-link" href="#">CITAS</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/sprintOne" className='link'><a class="nav-link" href="#">SPRINT 1</a></Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/sprintTwo" className='link'><a class="nav-link" href="#">SPRINT 2</a></Link>
                    </li>
                </ul>
                
                <div className='btnChido'>
                    <button>Get Started</button>
                </div>
               
            </div>
        </div>
    </nav>
  )
}


export default Navbar