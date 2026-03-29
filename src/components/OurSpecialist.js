import React from "react";

const OurSpecialists = () => {
  return (
    <section className="specialist-section py-5">
      <div className="container">
        
        {/* Heading */}
        <h2 className="fw-bold mb-3">
          Our <span style={{color: "#792d07"}}>Specialists</span>
        </h2>

        <p className="text-muted mb-5">
          Dr. Rajeev Singh sounds is accomplished and dedicated pediatric surgeon and urologist. 
          His training in esteemed institutes like King Edward Memorial Hospital in Mumbai and 
          Kalawati Saran Children’s Hospital in New Delhi speaks volumes about his educational background.
        </p>

        <div className="row align-items-center">
          
          {/* LEFT IMAGE */}
          <div className="col-md-5 mb-4 mb-md-0">
            <img
             src="https://res.cloudinary.com/dodhn4tgj/image/upload/v1774787112/profile_rauwrd.jpg"
              alt="Doctor"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-7">
            <h3 className="fw-bold text-dark">Dr. Rajeev Singh</h3>

            <p className="text-primary fw-semibold mb-2">
              Senior Director – Paediatric (Ped) Surgery,
              Paediatric (Ped) Urology & Robotic Surgery
            </p>

            <p className="fw-semibold">
              BLK-MAX Super Speciality Hospital (Delhi) <br />
              Max Hospital, Gurgaon
            </p>

            <p className="text-muted">
              Moreover, his specialized expertise in pediatric urology and minimally invasive surgery 
              indicates a keen focus on advanced and precise medical techniques for treating young patients. 
              The opportunity to work at Great Ormond Street in London likely provided him with invaluable 
              international experience and exposure to cutting-edge practices.
            </p>

            {/* Signature */}
            <h4 className="signature">Dr Rajeev Singh</h4>

            {/* Buttons */}
            <div className="mt-3">
              <button className="btn btn-purple me-3">
                BIOGRAPHY
              </button>

              <button className="btn btn-primary">
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurSpecialists;