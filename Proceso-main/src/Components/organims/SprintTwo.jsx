import React from 'react'
import Navbar from '../Molecules/Navbar'
import pdf from '../../pdf/actividad.pdf'

function SprintTwo() {
  return (
    <>  
    <Navbar/>
        <div className='pdfOne'>
            <object data={pdf} type=""></object>
        </div>
    </>
  )
}

export default SprintTwo