import React from 'react'


import ConditionTreatSlider from './ConditionTreatCards'

import ConditionTreatCards from './ConditionTreatCards'
import SurgeriesPerformCards from './SurgeriesPerformCards'

const ConditionAndSurgeries = () => {
  return (
    <div className='text-start container d-flex flex-md-nowrap flex-wrap justify-content-around gap-5 mt-4 mb-5 py-3'>
        <div className='d-flex gap-2 flex-column align-item-center rounded-2 w-50  border-top-0' style={{height:"400px",boxShadow:'0px 0px 3px black'}} >
            <div className='text-center text-white fw-semibold rounded-2 rounded-bottom-0 p-3 border-0 ' style={{backgroundColor:'var(--website-primary)'}}>Condition I treat</div>
            <ConditionTreatCards/>        
          
        </div>
        <div className='d-flex gap-2 flex-column align-item-center rounded-2  w-50  border-top-0 ' style={{height:"400px", boxShadow:'0px 0px 3px black'}} >
            <div className='text-center text-white fw-semibold rounded-2 rounded-bottom-0  p-3 border-0 ' style={{backgroundColor:'var(--website-primary)'}}>Surgeries I perform</div>
            <SurgeriesPerformCards/>          
        </div>
    </div>
  )
}

export default ConditionAndSurgeries