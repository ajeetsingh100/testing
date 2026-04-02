import React from 'react'

import HeroSection from '../components/HeroSection';
import DoctorAtGlance from '../components/DoctorAtGlance';
import OurSpeciality from '../components/OurSpeciality';
import BookAppointment from '../components/BookAppointment';
import OurSpecialists from '../components/OurSpecialist';
import Statistics from '../components/Statistics';
import VideosSection from '../components/VideoSection';
import Testimonials from '../components/Testimonial';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>    
      <HeroSection/>
      <DoctorAtGlance/>
      <OurSpeciality/>
      <BookAppointment/>
      <OurSpecialists/>
      <Statistics/>
      <VideosSection/>
      <Testimonials/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}

export default Homepage