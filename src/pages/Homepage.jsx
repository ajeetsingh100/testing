import React from 'react'

import HeroSection from '../components/HeroSection';
import DoctorAtGlance from '../components/DoctorAtGlance';

import OurSpecialists from '../components/OurSpecialist';
import Statistics from '../components/Statistics';
import VideosSection from '../components/VideoSection';
import Testimonials from '../components/Testimonial';
import Footer from '../components/common/Footer';
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
      <VideosSection/>
      <Testimonials/>    
      <Footer/>
    </div>
  )
}

export default Homepage