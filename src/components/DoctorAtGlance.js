import React from "react";


const DoctorAtGlance = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-start">
        <div className="row ">
          
          {/* LEFT IMAGE */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://res.cloudinary.com/dodhn4tgj/image/upload/v1774787111/intro_vgtmyi.jpg"  // 👉 apni image path yaha do
              alt="Doctor"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6 px-4">
            <h2 className="fw-bold mb-4 fs-2" style={{ color: "#792d07" }}>
              Dr. Rajeev Singh – Advance Laparoscopic Surgeon, Protologist, Urologist, Endoscropist and Gastrologist
            </h2>

            <div className="row">
              
              {/* MISSION */}
              <div className="col-6">
                <div className="d-flex align-items-start">
                  
                  <div>
                   <span className="bi bi-bullseye text-danger" style={{fontSize:"66px"}}></span>
                    <h5 className="fw-bold">Our Aim</h5>
                    <p className="">
                    Our mission is to treat every patient with compassion, seamless co-ordination and leading with innovation. While we improve the health of the diverse communities we serve.
                    </p>
                  </div>
                </div>
              </div>

              {/* VISION */}
              <div className="col-6">
                <div className="d-flex align-items-start">
                
                  <div>
                     <span className="bi bi-eye text-danger" style={{fontSize:"66px"}}></span>
                    <h5 className="fw-bold">Our Vision</h5>
                    <p className="">
                     To be a trusted healthcare organization delivering clinical excellence, innovation, and exceptional patient care through evidence-based collaborative approach.
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