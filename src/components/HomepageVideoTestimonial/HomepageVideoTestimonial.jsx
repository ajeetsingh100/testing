import React from 'react'
import HomepageVideoTestimonialSlider from './HomepageVideoTestimonialSlider'

const HomepageVideoTestimonial = () => {
  return (
    <div>
        <div className="container mt-5  text-start">

      {/* Heading */}
      <h6 className="fw-bold mb-1">Patient Testimonials</h6>
      <h2 className=" mb-4">
        What do our patients say?
      </h2>
      <HomepageVideoTestimonialSlider/>
    </div>
    </div>
  )
}

export default HomepageVideoTestimonial