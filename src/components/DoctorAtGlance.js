import React from "react";


const DoctorAtGlance = () => {
  return (
    <section className="py-5 bg-light container-fluid">
      <div className="container">
        <div class="card rounded-start border-0 bg-transparent" style={{maxWidth:"1105px"}}>
  <div class="row g-0 ">
    <div class="col-md-6">
      <img src="https://res.cloudinary.com/dodhn4tgj/image/upload/v1774787111/intro_vgtmyi.jpg" class="img-fluid" alt="..."/>
    </div>
    <div class="col-md-6">
      <div class="card-body row text-start text fs">
        <div className='col-12'><h2 className="fw-bold  fs-2" style={{ color: "#792d07" }}>
              Dr. Rajeev Singh – Advance Laparoscopic Surgeon, Protologist, Urologist, Endoscropist and Gastrologist
            </h2></div>
        <div className='col-lg-6 col-md-12'>
           <span className="bi bi-bullseye text-danger" style={{fontSize:"66px"}}></span>
            <h5 className="fw-bold">Our Aim</h5>
            <p>Our aim is to treat every patient with compassion, 
                seamless co-ordination and leading with innovation. 
            While we improve the health of the diverse communities we serve</p>
         </div>
        <div className='col-lg-6 col-md-12'>
            <span className="bi bi-eye text-danger" style={{fontSize:"66px"}}></span>
             <h5 className="fw-bold">Our Vision</h5>
        <p>
            To be a trusted healthcare organization delivering clinical excellence, innovation, 
            and exceptional patient care through evidence-based collaborative approach.</p>
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