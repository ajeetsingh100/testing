import React from 'react'
import ServiceSlider from '../Service/ServiceSlider'
import FreeServiceSlider from './FreeServiceSlider'

const FeaturingFreeService = () => {
  return (
    <div className='text-start container mt-4 mb-4 py-5'>
        <h6 className='fw-bold'>CASHLESS FREE SERVICES</h6>
        <h2>Trusted Health Solutions</h2>
        <h6 className='text-secondary mb-5'>We provide comprehensive medical care, including  neurology, oncology, general surgery and more.</h6>
        <FreeServiceSlider/>
    </div>
  )
}

export default FeaturingFreeService