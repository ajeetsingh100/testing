import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 mt-5">

      <div className="container">

        {/* MAP SECTION */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-8 text-center">

            <h5 className="mb-3">Our Location</h5>

            <div className="map-wrapper">
              <iframe
                title="clinic-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.123456789!2d81.846311!3d25.435801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2sClinic%20Location!5e0!3m2!1sen!2sin!4v1700000000000"

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

      </div>

      {/* COPYRIGHT */}
      <div className="text-center py-3 mt-3 border-top border-secondary">
        <small>© 2026 Dr. Clinic. All Rights Reserved.</small>
      </div>

    </footer>
  );
};

export default Footer;