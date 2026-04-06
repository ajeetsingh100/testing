import React from 'react'
import DoctorSlider from './DoctorSlider'

const OurDoctors = () => {
  return (
    <div>
      <div className='text-start container mt-5 py-5'>
        <h6 className='fw-bold'>MEET THE TEAM</h6>
        <h2>Our Specialised Doctors</h2>
        <h6 className='text-secondary mb-5'>Meet our team of highly skilled and experienced doctors, committed to delivering exceptional medical care with compassion.
        With expertise across multiple specialties, we strive to ensure the best outcomes for every patient.</h6>
        <DoctorSlider/>
    </div>
    </div>
  )
}

export default OurDoctors