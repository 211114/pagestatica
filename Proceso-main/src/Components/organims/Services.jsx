import React from 'react'
import CardService from '../Molecules/CardService'

import doctor1 from '../../assets/Images/doctor1.png'
import doctor2 from '../../assets/Images/doctor2.png'
import doctor3 from '../../assets/Images/doctor3.png'


function Services() {
  return (
    <div className='container-servicio'>
        <div data-aos="fade-up" data-aos-duration="1000">
            <CardService title="Instant Server Start" paragraph="On demand file serving over native ESM, no bundling required!" img={doctor1} />
        </div>
        
        <div data-aos="fade-up" data-aos-duration="1500">
            <CardService title="Lightning Fast HMR" paragraph="On demand file serving over native ESM, no bundling required!" img={doctor2} />
        </div>

        <div data-aos="fade-up" data-aos-duration="2000">
            <CardService title="Rich Features" paragraph="On demand file serving over native ESM, no bundling required!" img={doctor3} />
        </div>
        
    </div>
  )
}

export default Services