import React from "react";

const DoctorAtGlance = () => {
  return (
    <section className="py-5 bg-light container-fluid">
      <div className="container">
        <div className="card border-0 bg-transparent">
          <div className="row g-4 align-items-center">
            
            {/* Image Section */}
            <div className="col-12 col-md-6">
              <img
                src="https://res.cloudinary.com/dodhn4tgj/image/upload/v1774787111/intro_vgtmyi.jpg"
                className="img-fluid rounded w-100"
                alt="Doctor"
              />
            </div>

            {/* Content Section */}
            <div className="col-12 col-md-6">
              <div className="card-body text-center text-md-start">

                {/* Heading */}
                <h2
                  className="fw-bold mb-4"
                  style={{color:'#7A0404'}}
                >
                  Dr. Rajeev Singh – Advance Laparoscopic Surgeon,
                  Proctologist, Urologist, Endoscopist and Gastrologist
                </h2>

                <div className="row g-4">

                  {/* Aim */}
                  <div className="col-12 col-lg-6">
                    <div className="text-center text-md-start">
                      <span
                        className="bi bi-bullseye text-danger d-block mb-2"
                        style={{ fontSize: "40px" }}
                      ></span>
                      <h5 className="fw-bold" >Our Aim</h5>
                      <p className="mb-0">
                        Our aim is to treat every patient with compassion,
                        seamless coordination, and innovation while improving
                        the health of diverse communities.
                      </p>
                    </div>
                  </div>

                  {/* Vision */}
                  <div className="col-12 col-lg-6">
                    <div className="text-center text-md-start">
                      <span
                        className="bi bi-eye text-danger d-block mb-2"
                        style={{ fontSize: "40px" }}
                      ></span>
                      <h5 className="fw-bold" >Our Vision</h5>
                      <p className="mb-0">
                        To be a trusted healthcare organization delivering
                        clinical excellence, innovation, and exceptional patient
                        care through an evidence-based approach.
                      </p>
                    </div>
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