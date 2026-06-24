import React from 'react'

import HeroSection from '../components/HeroSection';


import OurSpecialists from '../components/OurSpecialist';
import Statistics from '../components/Statistics';
import FeaturingServices from '../components/Service/FeaturingServices';
import FeaturingFreeService from '../components/FreeService/FeaturingFreeService';
import OurDoctors from '../components/DoctorTeam/OurDoctors';
import JourneyTimeline from '../components/TimeLine/JourneyTimeline';
import WhyChoose from '../components/Why choose us/WhyChoose';
import ConditionAndSurgeries from '../components/Condition&SurgeriesTreat/ConditionAndSurgeries';
import Blog from '../components/Blog/Blog';
import PatientReviews from '../components/PatientReviews/PatientReviews';
import HomepageVideoTestimonial from '../components/HomepageVideoTestimonial/HomepageVideoTestimonial';



const Homepage = () => {
  return (
    <div>    
      <HeroSection/>  
      <OurSpecialists/>
      <JourneyTimeline/>
      <ConditionAndSurgeries/>
      <Statistics/> 
      <FeaturingFreeService/> 
      <FeaturingServices/>      
      <OurDoctors/>
      <WhyChoose/>    
      <HomepageVideoTestimonial/> 
      <PatientReviews/>
      <Blog/>
    </div>
  )
}

export default Homepage