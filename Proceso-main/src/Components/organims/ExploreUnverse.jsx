import React from 'react'
import Carrusel from '../Molecules/Carrusel'
import cora from '../../assets/Images/cora.png'

function ExploreUnverse() {
  return (
    <div className='conatiner-carrusel'  >
        <h1  data-aos="zoom-in" data-aos-duration="2000">Explore Universe</h1>
       
        <div className='box-row-carrusel' >
            <div className='card1' data-aos="fade-up"  data-aos-anchor-placement="top-bottom"           data-aos-duration="2000">
                <Carrusel subTitle="A World Without Limits" paragraph="Direct repair of aneurysm, pseudoanerysm, of excision (paartial or total) and graft insertion" subGraph="You can visit every planet in every galaxy" learn="Learn More" />
            </div>
            
            <div className='content-box corazin' data-aos="fade-down" data-aos-duration="2000">
                <img src={cora} alt="logoo" />
            </div>

            <div className='card2' data-aos="fade-up"  data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                <Carrusel subTitle="There Are More Than 200 Stars" paragraph="Direct repair of aneurysm, pseudoanerysm, of excision (paartial or total) and graft insertion" subGraphv2="With 600 Explorers"  learn="Learn More" />
            </div>
        </div>

    </div>
  )
}

export default ExploreUnverse