import React from 'react'
import Presentation from '../Components/organims/Presentation';
import Exploring from '../Components/organims/Exploring';
import ExploreUnverse from '../Components/organims/ExploreUnverse';
import Services from '../Components/organims/Services';
import Footer from '../Components/organims/Footer';
import Navbar from '../Components/Molecules/Navbar';
import LinesChart from '../Components/organims/LinesChart';

function HomeLanding() {
  return (
    <>
      <Navbar/>
      <section data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out">
        <Presentation />
      </section>
      <Exploring />
      <ExploreUnverse/>
      <Services />
      <hr />
      <Footer />
    
    </>
  )      
  
}

export default HomeLanding;