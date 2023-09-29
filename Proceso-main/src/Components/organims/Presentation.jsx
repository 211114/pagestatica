import React from 'react'
import Title from '../atoms/Title'
import Paragraph from '../atoms/Paragraph'
import Button from '../atoms/Button'
import meteorito from '../../assets/Images/Meteoro.png'
import doctor from '../../assets/Images/Hola.png'
import '../../assets/Styles/Presentation.css'

function Presentation() {
  return (
    <div>
        {/* <Navbar/> */}
        <div className='conatiner-show'>
            <div className='image-show'>
                <img src={doctor} alt="" />
            </div>
            <div className='Text-show'>
                <Title level="h1" text="WELCOME TO MEDILAB" />
                <Paragraph graph="Open repair of infrarenal aortic aneurysm or dissection, plus repair of associated arterial trauma,  of infrarenal aortic aneurysm or dissection,  of infrarenal aortic aneurysm or dissection." />
                <div className='btn-show'>
                    <Button msn="Correo Electronico" link="https://mail.google.com/mail/u/1/?ogbl#inbox" />
                    <Button className="btn2" msn="Ver Video" classNames="btn22" link="https://www.youtube.com/watch?v=1T4tpy2e8tA&list=RD1T4tpy2e8tA&start_radio=1" />
                </div>
                
            </div>

            <div className='image-meteori'>
                <img src={meteorito} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Presentation