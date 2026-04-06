import React from 'react'

const Card = ({cardName,cardImg}) => {
  return (
    <div>
       <div>
          <div className='card custom-card bg-transparent border border-1 border-light text-white d-flex flex-column align-items-center py-3' style={{width:"15rem",height:"12rem"}}>
              <div className='card-body text-center'>
               <img src={cardImg} alt="" />
                <h4 className='mt-3 fw-bold'>{cardName}</h4>
                <div className='hover-overlay'>

                </div>
              </div>
          </div>
    </div>
    </div>
  )
}

export default Card