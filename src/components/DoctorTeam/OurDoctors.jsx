import React from 'react'
import DoctorSlider from './DoctorSlider'

const OurDoctors = () => {
  return (
    <div>
      <div className='text-start container mt-5 py-5'>
        <h6 className='fw-bold'>Led by Dr. Rajeev Singh</h6>
        <h2>THE SURGICAL TEAM</h2>
        <h6 className='text-secondary mb-5'>Every surgical case is personally managed by Dr. Rajeev Singh — 
          from first consultation to final follow-up. Supporting him is a 
          handpicked team of specialists who ensure complete patient care.
          </h6>
        <DoctorSlider/>
    </div>
    </div>
  )
}

export default OurDoctors