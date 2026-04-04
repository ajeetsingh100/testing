import React from "react";



const TopHeader = () => {
  return (
    <div className="top-header sticky-top" style={{backgroundColor:"#7A0404"}}>
      <div className="container d-flex align-items-center justify-content-between">

        {/* Logo */}
        <div className="logo">
          <img src="https://res.cloudinary.com/dodhn4tgj/image/upload/q_auto/f_auto/v1775210500/Advance_Laparoscopic_Surgeon_Proctologist_Urologist_Endoscopist_and_gastrologisttt_tcfg5z.png" alt="" width={260}/>
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