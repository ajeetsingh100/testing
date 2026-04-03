import React from 'react'

const AboutDoctor = () => {
  return (
    <div>
          <header class="hero-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 text-center mb-4 mb-lg-0 order-lg-2">
                    <div class="doctor-photo-container">
                        <img src="https://res.cloudinary.com/dodhn4tgj/image/upload/q_auto/f_auto/v1774787112/profile_rauwrd.jpg" alt="Dr. Rajeev Singh" class="doctor-photo"/>
                    </div>
                </div>
                
                <div class="col-lg-8 order-lg-1" style={{color:"#7A0404"}}>
                    
                    <h1 class="display-4 fw-bold text-dark mb-2">Dr. Rajeev Singh</h1>
                    <p class="h4 fw-600 mb-3" style={{color:"#7A0404"}}>M.B.B.S., M.S. (Gold Medalist)</p>
                    <p class="text-muted mb-4 lead">F.I.A.G.E.S., F.M.A.S., F.A.C.R.S.I., Ex-Registrar (U.C.M.S.)</p>
                    
                   
                </div>
            </div>
        </div>
    </header>

    <main class="container text-start my-2 py-2">
        <div class="row g-5">
            
            <div class="col-lg-7">
                
                <section class="mb-5">
                    <h2 class="section-title" style={{color:"#7A0404"}}>About Our Specialist</h2>
                    <p class="lead text-secondary">
                        Dr. Rajeev Singh is a highly experienced <strong>Advanced Laparoscopic Surgeon in India</strong>, specializing in minimally invasive procedures across urology, proctology, endoscopy, and gastroenterology.
                    </p>
                    <p>
                        With a distinguished <strong>M.S. Gold Medal</strong> and advanced fellowships including FIAGES and FMAS, he is committed to delivering precise, safe, and effective surgical treatments. His expertise spans a wide range of conditions such as hernia, gallbladder stones, piles (hemorrhoids), fissures, fistula, and kidney stones.
                    </p>
                </section>

                <section>
                    <h2 class="section-title" style={{color:"#7A0404"}}>Experience & Expertise</h2>
                    <p>
                        With years of surgical excellence, Dr. Singh combines clinical expertise with patient-centered care. His approach ensures reduced pain, faster recovery, and improved treatment outcomes.
                    </p>
                    <div class="p-4 bg-light rounded-3 border-start border-danger border-4 shadow-sm mt-4" >
                        <h5 class="fw-bold text-dark">Director</h5>
                        <p class="text-primary fw-500 mb-1">Advanced Laparoscopic, Proctology, Urology & Gastroenterology</p>
                        <p class="fw-bold text-uppercase text-muted mb-0" style={{letterSpacing: "1px", fontSize:" 0.9rem"}}>
                            Narayan Swaroop Foundation Super Speciality Hospital
                        </p>
                    </div>
                </section>
                
            </div><div class="col-lg-5">
                
                <div class="card info-card mb-5">
                    <div class=" card-icon-header d-flex align-items-center" style={{backgroundColor:"#7A0404"}}>
                        <span class="h4 mb-0">Why Choose Dr. Rajeev Singh?</span>
                    </div>
                    <div class="card-body p-4">
                        <ul class="list-unstyled specialty-list mb-0">
                            <li>Expert in Advanced Laparoscopic Surgery</li>
                            <li>Specialized in Proctology, Urology & Gastroenterology</li>
                            <li>Focus on Minimally Invasive & Painless Procedures</li>
                            <li>Faster Recovery & Minimal Scarring</li>
                            <li>Trusted by patients for safe and effective treatment</li>
                        </ul>
                    </div>
                </div>

                <div class="card info-card " style={{backgroundColor:"#f8c5c5"}}>
                    <div class="card-body p-4 text-center">
                        <h5 class="fw-bold mb-3">Associated Hospital</h5>
                        <p class="text-muted mb-3">Providing modern healthcare services, including advanced surgical and diagnostic care.</p>
                        <span class="h6 fw-bold text-primary">Narayan Swaroop Hospital</span>
                    </div>
                </div>

            </div></div>
    </main>

    </div>
  )
}

export default AboutDoctor