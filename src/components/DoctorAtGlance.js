import React from "react";



const DoctorAtGlance = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          
          {/* LEFT IMAGE */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop"  // 👉 apni image path yaha do
              alt="Doctor"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: "#0d2c54" }}>
              Dr. Rakesh Singh – Pediatric Surgery & Pediatric Urology
            </h2>

            <div className="row">
              
              {/* MISSION */}
              <div className="col-6">
                <div className="d-flex align-items-start">
                  
                  <div>
                    <h5 className="fw-bold">Our Mission</h5>
                    <p className="text-muted small">
                      We’re dedicated to every child’s well-being, providing
                      compassionate care and innovative treatments for their
                      health and happiness.
                    </p>
                  </div>
                </div>
              </div>

              {/* VISION */}
              <div className="col-6">
                <div className="d-flex align-items-start">
                
                  <div>
                    <h5 className="fw-bold">Our Vision</h5>
                    <p className="text-muted small">
                      Striving for excellence in pediatric surgery and urology,
                      we aim to ensure a healthy and joyful future for every
                      child.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DoctorAtGlance;