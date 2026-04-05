import React from 'react'

import HeroSection from '../components/HeroSection';


import OurSpecialists from '../components/OurSpecialist';
import Statistics from '../components/Statistics';

import Testimonials from '../components/Testimonial';

import FeaturingServices from '../components/Service/FeaturingServices';
import FeaturingFreeService from '../components/FreeService/FeaturingFreeService';
import OurDoctors from '../components/DoctorTeam/OurDoctors';



const Homepage = () => {
  return (
    <div>    
      <HeroSection/>  
      <OurSpecialists/>
      <Statistics/> 
      <FeaturingFreeService/> 
      <FeaturingServices/>    
      <OurDoctors/>
      <Testimonials/> 
    </div>
  )
}

export default Homepage