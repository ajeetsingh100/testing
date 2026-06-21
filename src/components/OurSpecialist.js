import React from "react";

const OurSpecialists = () => {
  return (
    <div className="container my-5 text-start">
      <h1 className="text-start fw-bold">About <span style={{color:"#7A0404"}}>Dr. Rajeev Singh</span></h1>
      <p className="text-muted   ">Advanced Laparoscopic, Laser, and Endoscopic Surgeon with <span className="fw-semibold me-1" style={{color:"#7A0404"}}>25 years</span> 
          of surgical excellence. Committed to painless, minimally-invasive 
          procedures with faster recovery
      </p>
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
          <h1 className=" fw-bold">Dr. Rajeev Singh</h1>
          
          <p className=" fw-semibold mb-2" style={{color:"#7A0404"}}>
            Advanced Laparoscopic Surgeon, Proctologist, Urologist, Colorectal Surgeon Endoscopist & Gastroenterologist
          </p>
          <p className=" fw-semibold mb-2" style={{color:"#7A0404"}}>
           M.B.B.S., M.S. (Gold Medalist)
            F.I.A.G.E.S., F.M.A.S.
            F.A.C.R.S.I.
            Ex-Registrar U.C.M.S. Lucknow
           </p>

          <div className="mb-3">
            <span>Director & Lead Surgeon</span><br/>
             <span className="fw-bold" style={{fontSize:'13px'}}>Narayan Swaroop Hospital</span>   
          </div>

          <p className="text-muted small mb-2">
            I have been practicing advanced laparoscopic and laser surgery 
            in Prayagraj for over 25 years, with more than 40,000 procedures 
            performed personally. My core specialties are laparoscopic surgery, 
            laser piles and proctology, urology (kidney stones, prostate, 
            urinary conditions), gastroenterology, colorectal surgery, 
            diagnostic and therapeutic endoscopy, and laser varicose vein 
            treatment (EVLT).

          </p>
          <p className="text-muted small">
            I completed my M.S. in General Surgery with a Gold Medal from 
            UCMS Lucknow, followed by fellowships in FIAGES, FMAS, and FACRSI. 
            I believe every patient deserves direct access to their surgeon — 
            which is why I personally handle every consultation and procedure, 
            and remain available on WhatsApp for post-operative care.
          </p>
          <div >
              <img src="https://res.cloudinary.com/dodhn4tgj/image/upload/q_auto/f_auto/v1775223761/signature-removebg-preview_s8na50.png"  className='img-fluid w-50  ' alt="" />
          </div>      

        </div>
      </div>

    </div>
  </div>
</div>
  );
};

export default OurSpecialists;