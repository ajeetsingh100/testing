import React from "react";



const TopHeader = () => {
  return (
    <div className="top-header" style={{backgroundColor:"#792d07"}}>
      <div className="container d-flex align-items-center justify-content-between">

        {/* Logo */}
        <div className="logo">
          <img src="https://res.cloudinary.com/dodhn4tgj/image/upload/v1774787111/Director_Narayan_Swaroop_Hospital_dwih4u.png" alt="" width={260}/>
        </div>

        {/* Contact */}
        <div className="contact text-white fs-4 fw-bold d-flex gap-3 align-items-baseline">
          <span className="text-danger">For Enquiry</span>      
          <span className="fs-5">  <i class="bi bi-telephone"></i>+91 987654321</span>
        </div>

        {/* Button */}
        <div>
          <button className="btn btn-light fw-bold">
            Book an Appointment
          </button>
        </div>

      </div>
    </div>
  );
};

export default TopHeader;