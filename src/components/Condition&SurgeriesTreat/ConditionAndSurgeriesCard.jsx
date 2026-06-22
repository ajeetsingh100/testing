import React from 'react'

const ConditionAndSurgeriesCard = ({title,description}) => {
  return (
    <div>
        <div>
            <div className='small rounded-2  rounded-2 px-4  py-2 text-center text-dark w-auto' style={{backgroundColor:'rgba(208, 108, 30, 0.4)'}}>
              <div className='d-flex flex-column  gap-1' style={{fontSize:'12px'}}>
                   <div className='fw-semibold text-nowrap'>{title}</div>
                   <div className='small text-nowrap'>{description}</div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default ConditionAndSurgeriesCard