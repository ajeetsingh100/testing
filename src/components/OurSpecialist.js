import React from "react";

const OurSpecialists = () => {
  return (
    <div className="container  our-spc my-md-5 text-start">
      <h1 className="text-start fw-bold">Our <span style={{color:"#7A0404"}}>Specialist</span></h1>
      <p className="text-secondary  ">Expert in Advance Laparoscopic Surgeon, Proctologist, Urologist , Endoscopist and Gastrologist with years of surgical excellence.
        Committed to advanced treatment techniques ensuring comfort, safety, and quick healing.</p>
        <div className="card shadow-lg border-0 mt-5">
        <div className="row g-0 align-items-center">
      
   
      <div className="col-md-5 text-center p-3 ">
        <img 
          src="https://res.cloudinary.com/dodhn4tgj/image/upload/q_auto/f_auto/v1774787112/profile_rauwrd.jpg" 
          alt="Dr Rajeev Singh" 
          className="img-thumbnail"
          
        />
      </div>

    
      <div className="col-md-7">
        <div className="card-body text-start">
          <h3 className="card-title fs-1 fw-bold">Dr. Rajeev Singh</h3>
          
          <p className=" fw-semibold mb-2" style={{color:"#7A0404"}}>
            Advanced Laparoscopic Surgeon, Proctologist, Urologist, Endoscopist & Gastroenterologist
          </p>
          <p className=" fw-semibold mb-2" style={{color:"#7A0404"}}>
           M.B.B.S., M.S. (Gold Medalist)
            F.I.A.G.E.S., F.M.A.S.
            Ex-Registrar, U.C.M.S.
            F.A.C.R.S.I.

          </p>

          <p className="mb-2">
            Director<br/>
            <strong>Narayan Swaroop Hospital</strong><br/>
   
          </p>

          <p className="text-muted">
            Dr. Rajeev Singh is a highly experienced Advanced Laparoscopic Surgeon in India, specializing in minimally invasive surgery, urology, proctology, endoscopy, and gastroenterology. 
            With an M.S. Gold Medal and advanced fellowships like FIAGES and FMAS, he is known for delivering precise, safe, and effective surgical treatments.
          </p>
          
          <img src="https://res.cloudinary.com/dodhn4tgj/image/upload/q_auto/f_auto/v1775223761/signature-removebg-preview_s8na50.png"  className='img-fluid 'alt="" />
      

        </div>
      </div>

    </div>
  </div>
</div>
  );
};

export default OurSpecialists;