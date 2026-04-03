import React from 'react'

const FreeServiceCard = ({image}) => {
  return (
    <div>
        <div>
            <div className='card bg-transparent border border-1 border-light text-white d-flex flex-column align-items-center py-3' style={{width:"20rem"}}>
              <div className='card'>
               <img src={image} alt="hello" className='img-fluid shadow' />
              </div>
          </div>
        </div>
    </div>
  )
}

export default FreeServiceCard