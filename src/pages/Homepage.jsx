import React from 'react'

import HeroSection from '../components/HeroSection';


import OurSpecialists from '../components/OurSpecialist';
import Statistics from '../components/Statistics';

import Testimonials from '../components/Testimonial';

import FeaturingServices from '../components/Service/FeaturingServices';
import FeaturingFreeService from '../components/FreeService/FeaturingFreeService';
import OurDoctors from '../components/DoctorTeam/OurDoctors';
import JourneyTimeline from '../components/TimeLine/JourneyTimeline';
import WhyChoose from '../components/Why choose us/WhyChoose';



const Homepage = () => {
  return (
    <div>    
      <HeroSection/>  
      <OurSpecialists/>
      <JourneyTimeline/>
      <Statistics/> 
      <FeaturingFreeService/> 
      <FeaturingServices/>      
      <OurDoctors/>
      <WhyChoose/>    
      <Testimonials/> 
    </div>
  )
}

export default Homepage