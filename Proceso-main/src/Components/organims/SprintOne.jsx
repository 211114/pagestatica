import React from 'react'
import pdfOne from '../../pdf/vista.pdf'
import Navbar from '../Molecules/Navbar'

function SprintOne() {
  return (
    <>
    <Navbar/>
        <div className='pdfOne'>
           <object data={pdfOne} type=""></object> 
        </div>
    </>
  )
}

export default SprintOne