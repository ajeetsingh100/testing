import React from "react";

const Footer = () =>{
  return (
    <div className='w-100 mt-5 d-flex flex-column align-items-center justify-content-center'>
        <div className=' position-relative d-flex justify-content-center   w-100 ' style={{height:"100vh"}}>
        {/* Background Image */}
        <div className='w-100 h-100' 
        style={
          {
            backgroundImage: "url('https://res.cloudinary.com/dodhn4tgj/image/upload/q_auto/f_auto/v1774787112/narayan_swaroop_hospital_wdhlkk.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
        }>
        </div>
        {/* Mask */}
        <div
          className="position-absolute top-0  w-100 h-100"
          style={{
            backgroundColor: "rgb(122, 4, 4,0.9)",
          }}
          ></div>
          {/* Content */}
          <div className="container position-absolute text-white py-4">

        {/* MAP SECTION */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-8 text-center">

            <h2 className="mb-3">Our Location</h2>

            <div className="map-wrapper">
              <iframe
                title="clinic-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.6554540686516!2d81.76437709999998!3d25.449780099999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acdaa90c05fd3%3A0xba54a5371cb7f1e5!2sNARAYAN%20SWAROOP%20HOSPITAL%E2%9C%85%7C%20Best%20Hospital%20in%20Prayagraj%20%7C%20Best%20Multi-Specialty%20hospital%20in%20Prayagraj!5e0!3m2!1sen!2sin!4v1775399065564!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="text-center mb-4">
          <h6>Follow Us</h6>

          <div className="fs-6 mt-2">
            <a href="#" className="mx-2 text-white fs-4">
  <i className="bi bi-linkedin"></i>
</a>

<a href="#" className="mx-2 text-white fs-4">
  <i className="bi bi-instagram"></i>
</a>

<a href="#" className="mx-2 text-white fs-4">
  <i className="bi bi-facebook"></i>
</a>

<a href="#" className="mx-2 text-white fs-4">
  <i className="bi bi-youtube"></i>
</a>
          </div>
        </div>

        {/* NAV LINKS (same as navbar) */}
        <div className="row text-center border-top pt-4">

          <div className="col-6 col-md-3 mb-2">
            <a href="#" className="footer-link">About Dr.</a>
          </div>

          <div className="col-6 col-md-3 mb-2">
            <a href="#" className="footer-link">Diseases We Treat</a>
          </div>

          <div className="col-6 col-md-3 mb-2">
            <a href="#" className="footer-link">Surgeries & Treatments</a>
          </div>
        
         <div className="col-6 col-md-3 mb-2">
            <a href="#" className="footer-link">Contact Us</a>
          </div>

          <div className="col-6 col-md-3 mb-2">
            <a href="#" className="footer-link">Contact Us</a>
          </div>

        </div>
          <div className="text-center pt-2 mt-3  border-top border-secondary">
        <small>© 2026 Dr. Rajeev Singh. All Rights Reserved.</small>
      </div>
      </div>

  
      

      </div>
    </div>
  )
}

export default Footer