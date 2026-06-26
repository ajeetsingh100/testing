import React from 'react'

const ConditionAndSurgeriesCard = ({title,description}) => {
  return (
    <div>    
        <div className='small  p-2 text-center text-dark'>
          <div className='d-flex flex-column px-2 text-start gap-1' style={{fontSize:'12px'}}>
             <div className='d-flex gap-2 '>
                <span className='bi bi-check-circle' style={{color:'var(--website-primary)'}} ></span>
                <div className='fw-semibold'>{title}</div>
             </div>
            <div className="text-wrap ps-3 ms-1 custom-width">
                {description}
            </div>
          </div>
        </div>
     </div>
  )
}

export default ConditionAndSurgeriesCard