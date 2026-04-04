import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className='container-fluid  bg-light'>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light container-lg " >
  <div class="container">
    <Link to={'/'} class="navbar-brand" >Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/about' class="nav-link active" aria-current="page" >About Dr.</Link>
        </li>
        
        <li class="nav-item dropdown position-static">
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Disease We Treat
          </a>
          <div class="dropdown-menu menu-mega container-row" aria-labelledby="navbarDropdown">
            <div className='row'>
            <ul className='col-6'>
              <li><Link to={'/surgeries&treatments/gastrointestinal-diseases'} class="dropdown-item"  >Gastrointestinal Diseases</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Gallbladder Stones (Cholelithiasis) </Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Appendicitis</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Hernia (Inguinal, Umbilical, Incisional)</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Acid Reflus (GERD)</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Stomach and Intstical Disorders</Link></li>
            </ul>
            <ul className='col-6'>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Proctology (Ano-Rectal Disorders)</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Piles (Hermorrhoids)</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Anal Fissure</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Fistual-in-Ano</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Pilonidal Sinus</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Rectal Bleding & Pain</Link></li>
            </ul>
            <ul className='col-6'>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Urological Conditions</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Kidney Stones</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Urinary Tract Infections</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Bladder Disorders</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Urinary Obstruction</Link></li>
            </ul>
            <ul className='col-6'>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Endoscopic Procedures & Diagnosis</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Upper GI Endoscopy</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Colonoscopy</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Diagnostic & Therapeutic Endoscopic Procedures</Link></li>    
            </ul>
            </div>
          </div>
        </li>
         <li class="nav-item dropdown position-static">
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Surgeries & Treatments
          </a>
          <div class="dropdown-menu menu-mega " aria-labelledby="navbarDropdown">
            <div className='row'>
                <ul className='col-lg-3 '>
              <li><a class="dropdown-item"  hidden>Action</a></li>
              <li><a href={'/surgeries&treatments/general-surgery'} class="dropdown-item" >General Surgery</a></li>
              <li><a href={'/surgeries&treatments/advance-laparoscopic-surgery'} class="dropdown-item" >Advance Laparoscopic Surgery</a></li>
              <li><a href={'/surgeries&treatments/urology'} class="dropdown-item" >Urology</a></li>
              <li><a href={'/surgeries&treatments/neuro-surgery'} class="dropdown-item" >Neuro Surgery</a></li>
              <li><a href={'/surgeries&treatments/orthopedia-and-joint-replacement'} class="dropdown-item" >Orthopedia and Joint Replacement</a></li>
              <li><a href={'/surgeries&treatments/onco-surgery'} class="dropdown-item" >Onco Surgery</a></li>
              <li><a href={'/surgeries&treatments/pediatric-surgery'} class="dropdown-item" >Pediatric Surgery</a></li>
              <li><a href={'/surgeries&treatments/plastic-burn-reconstructive-surgery'} class="dropdown-item" >Plastic & Burn Reconstructive Surgery</a></li>
            </ul>
            <ul className='col-3'>
              <li><a class="dropdown-item"  hidden>Another action</a></li>
              <li><a href={'/surgeries&treatments/gastro-intestinal-surgery'} class="dropdown-item" >Gastro Intestinal Surgery</a></li>
              <li><a href={'/surgeries&treatments/breast-surgery'} class="dropdown-item" >Breast Surgery</a></li>
              <li><a href={'/surgeries&treatments/thyroid-surgery'} class="dropdown-item" >Thryroid Surgery</a></li>
              <li><a href={'/surgeries&treatments/ent'} class="dropdown-item" >ENT</a></li>
              <li><a href={'/surgeries&treatments/genitourinary'} class="dropdown-item" >Genitourinary</a></li>
              <li><a href={'/surgeries&treatments/colorectal-surgery'} class="dropdown-item" >Colorectal Surgery</a></li>
              <li><a href={'/surgeries&treatments/trauma-and-accident-surgery'} class="dropdown-item" >Trauma & Accident Surgery</a></li>
               <li><a href={'/surgeries&treatments/evlt-endovenous-laser-treatment'} class="dropdown-item" >Evlt-endovenous Laser Treatment</a></li>
            </ul>
            <ul className='col-3'>
              <li><a class="dropdown-item"  hidden>Something else here</a></li>
              <li><a href={'/surgeries&treatments/laser-surgery'} class="dropdown-item"  >Laser Surgery</a></li>
              <li><a href={'/surgeries&treatments/piles'} class="dropdown-item" >Piles</a></li>
              <li><a href={'/surgeries&treatments/'} class="dropdown-item" >Medicine Department</a></li>
              <li><a href={'/surgeries&treatments/general-medicine'} class="dropdown-item" >General Medicine</a></li>
               <li><a href={'/surgeries&treatments/tb-and-chest-respiratory-medicine'} class="dropdown-item" >TB and Chest Respiratory Medicine</a></li>
              <li><a href={'/surgeries&treatments'} class="dropdown-item" >Diabetic Clinic</a></li>
              <li><a href={'/surgeries&treatments'} class="dropdown-item" >Psychiatry</a></li>
              <li><a href={'/surgeries&treatments'} class="dropdown-item" >Cardiology</a></li>
            </ul>
            <ul className='col-3'>
              <li><a class="dropdown-item"  hidden>Something else here</a></li>
              <li><a class="dropdown-item"  >Dermatology</a></li>
              <li><a href={'/surgeries&treatments'} class="dropdown-item" >Neurology</a></li>
              <li><a href={'/surgeries&treatments'} class="dropdown-item" >Nephrology</a></li>
              <li><a href={'/surgeries&treatments'} class="dropdown-item" >Oncology</a></li>
               <li><a href={'/surgeries&treatments'} class="dropdown-item" >TB and Chest Respiratory Medicine</a></li>
              <li><a href={'/surgeries&treatments'} class="dropdown-item text-wrap" >Anaesthesia, Critical Care & Pain Management</a></li>
              <li><a href={'/surgeries&treatments'} class="dropdown-item" >Clinical Nutrition & Diatetics</a></li>
              <li><a href={'/surgeries&treatments'} class="dropdown-item" >Laparoscopic Gynae Surgeries</a></li>
            </ul>

            </div>
          </div>
        </li>
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Patient Information
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <ul>
              <li><a class="dropdown-item"  hidden>Action</a></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Our Cases</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Rare Cases</Link></li>               
            </ul>           
          </div>
        </li>
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Gallary
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <ul>
              <li><a class="dropdown-item"  hidden>Action</a></li>
              <li><a href={'/gallery/certifications'} class="dropdown-item" >Certification</a></li>
              <li><a href={'/gallery/awards'} class="dropdown-item" >Award</a></li>
              <li><a href={'/gallery/print-media'} class="dropdown-item" >Print Media</a></li>
            </ul>
          
          </div>
        </li>
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Testimonials
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <ul>
              <li><a class="dropdown-item"  hidden>Action</a></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Video Testimonial</Link></li>
              <li><Link to={'/surgeries&treatments'} class="dropdown-item" >Written Testimonial</Link></li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <a class="nav-link" >Contact Us</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>


    </div>
  )
}

export default NavigationBar