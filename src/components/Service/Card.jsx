import React from 'react'

const Card = ({serviceName,serviceDescription}) => {
  return (
    <div>
       <div>
          <div className='card custom-card bg-transparent border border-1 border-light text-white d-flex flex-column align-items-center py-3' style={{width:"15rem",height:"12rem"}}>
              <div className='card-body text-center'>            
                <h4 className='mt-1 fw-bold'>{serviceName}</h4>
                <p className='mt-3 small'>{serviceDescription}</p>
                <div className='hover-overlay'>  </div>
              </div>
          </div>
    </div>
    </div>
  )
}

export default Card