import React from 'react'


import ConditionTreatSlider from './ConditionTreatSlider'
import SurgeriesPerformSlider from './SurgeriesPerformSlider'

const ConditionAndSurgeries = () => {
  return (
    <div className='text-start container d-flex flex-column gap-5 mt-4 mb-5 py-3'>
        <div className='d-flex gap-2 '>
            <div className='text-nowrap border rounded-2 shadow-sm text-white pt-3 px-3 'style={{backgroundColor:'rgba(122, 4, 4)'}}>Condition I treat</div>
           
             <ConditionTreatSlider/>
          
        </div>
        <div className='d-flex gap-2'>
            <SurgeriesPerformSlider/>
            <div className='text-nowrap pt-3 px-3 shadow-sm text-white rounded-2' style={{backgroundColor:'rgba(122, 4, 4)'}}>Surgeries I perform</div>
        </div>
    </div>
  )
}

export default ConditionAndSurgeries