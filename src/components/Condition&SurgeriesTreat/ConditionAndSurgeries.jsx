import React from 'react'


import ConditionTreatSlider from './ConditionTreatCards'

import ConditionTreatCards from './ConditionTreatCards'
import SurgeriesPerformCards from './SurgeriesPerformCards'

const ConditionAndSurgeries = () => {
  return (
    <div className='text-start container mt-5 mb-5 '>
      <div className='row gy-3'>
        <div className='col-md-12  col-lg-6'  >
            <div className='text-center text-white fw-semibold rounded-2 rounded-bottom-0 p-3 border-0 ' style={{backgroundColor:'var(--website-primary)'}}>Condition I treat</div>
            <ConditionTreatCards/>        
          
        </div>
        <div className=' col-md-12 col-lg-6 ' >
            <div className='text-center text-white fw-semibold rounded-2 rounded-bottom-0  p-3 border-0 ' style={{backgroundColor:'var(--website-primary)'}}>Surgeries I perform</div>
            <SurgeriesPerformCards/>          
        </div>

      </div>
    </div>
  )
}

export default ConditionAndSurgeries