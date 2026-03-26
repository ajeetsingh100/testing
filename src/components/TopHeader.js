import React from "react";


const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="container d-flex align-items-center justify-content-between">

        {/* Logo */}
        <div className="logo">
          <h4 className="m-0 text-white">Dr. Rakesh Singh</h4>
        </div>

        {/* Contact */}
        <div className="contact text-white">
          📞 +91 98765 43210
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