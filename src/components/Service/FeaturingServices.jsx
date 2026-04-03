import React from 'react'
import ServiceSlider from './ServiceSlider'


const FeaturingServices = () => {
  return (
    <div>
        <div className="position-relative d-flex justify-content-center align-items-center" style={{ height: "550px" }}>
  
  {/* Background Image */}
  <div
    className="w-100 h-100"
    style={{
      backgroundImage: "url('https://res.cloudinary.com/dodhn4tgj/image/upload/q_auto/f_auto/v1774787112/narayan_swaroop_hospital_wdhlkk.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>

  {/* Overlay (Opacity Layer) */}
  <div
    className="position-absolute top-0  w-100 h-100"
    style={{
      backgroundColor: "rgb(122, 4, 4,0.9)",
    }}
  ></div>

  {/* Content */}
  <div className="position-absolute top-0 mt-5  text-white ">
    <div className='container mt-4 ms-4  text-start'>
        <h6 className='fw-bold'>OUR SERVICES</h6>
        <h2>Trusted Healthcare Solutions</h2>
        <h6 className='text-secondary mb-5'>We provide comprehensive medical care, including  neurology, oncology, general surgery and more.</h6>
        <ServiceSlider/>
        <div className='d-flex justify-content-end mt-5'>
          <button className='btn btn-secondary border border-0'>View More Services <i className='bi bi-arrow-right'></i></button>
        </div>
    </div>
  </div>

</div>
    </div>
  )
}

export default FeaturingServices