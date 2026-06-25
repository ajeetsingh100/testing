import React, { useState } from "react";
import { Link } from "react-router-dom";

const menuData = [
  {
    menuId: "diseases-we-treat",
    content: [
      {
        id: "gastrointestinal-diseases",
        title: "Gastrointestinal Diseases",
        links: [
            {
                linkName:'Gallbladder Stones (Cholelithiasis)',
                hyperLink:'gallbladder-stones'
            },
            {
                linkName:'Appendicitis',
                hyperLink:'appendicitis'
            },
            {
                linkName:'Hernia (Inguinal, Umbilical, Incisional)',
                hyperLink:'hernia'
            },
            {
                linkName:'Acid Reflux (GERD)',
                hyperLink:'acid-reflux'
            },
            {
                linkName:'Intestinal Disorders',
                hyperLink:'intestinal-disorders'
            },
            {
                linkName:'Peptic Ulcer',
                hyperLink:'peptic-ulcer'
            },
            {
                linkName:'Intestinal Disorders',
                hyperLink:'intestinal-disorders'
            },
            {
                linkName:'Pancreatitis',
                hyperLink:'pancreatitis'
            },
        ],
      },
      {
        id: "proctology",
        title: "Proctology (Ano-Rectal)",
        links: [
          {
                linkName:'Piles (Hemorrhoids)',
                hyperLink:'piles'
            },
            {
                linkName:'Anal Fissure',
                hyperLink:'anal-fissure'
            },
            {
                linkName:'Fistula-in-Ano',
                hyperLink:'fistula-in-ano'
            },
            {
                linkName:'Pilonidal Sinus',
                hyperLink:'pilonidal-sinus'
            },
            {
                linkName:'Rectal Bleeding & Pain',
                hyperLink:'rectal-bleeding'
            },
            {
                linkName:'Rectal Prolapse',
                hyperLink:'rectal-bleeding'
            },
            {
                linkName:'Perianal Abscess',
                hyperLink:'perianal-abscess'
            },
        ],
      },
      {
        id: "urological-conditions",
        title: "Urological Conditions",
        links: [
            {
                linkName:'Kidney Stones ',
                hyperLink:'kidney-stones'
            },
            {
                linkName:'Urinary Tract Infections (UTI)',
                hyperLink:'urinary-tract-infections'
            },
            {
                linkName:'Prostate Problems (BPH)',
                hyperLink:'prostate-problems'
            },
            {
                linkName:'Bladder Disorders',
                hyperLink:'bladder-disorders'
            },
            {
                linkName:'Urinary Obstruction',
                hyperLink:'urinary-obstruction'
            },
            {
                linkName:'Hydrocele',
                hyperLink:'hydrocele'
            },
            {
                linkName:'Phimosis',
                hyperLink:'phimosis'
            },
            {   
                linkName:'Varicocele',
                hyperLink:'varicocele'
            },
             {
                linkName:'Male Infertility',
                hyperLink:'male-infertility'
            },
        ],
      },
      {
        id: "laparoscopic-surgery",
        title: "Laparoscopic Surgery",
        links: [
            {
                linkName:'Kidney Stones ',
                hyperLink:'kidney-stones'
            },
            {
                linkName:'Urinary Tract Infections (UTI)',
                hyperLink:'urinary-tract-infections'
            },
            {
                linkName:'Prostate Problems (BPH)',
                hyperLink:'prostate-problems'
            },
            {
                linkName:'Bladder Disorders',
                hyperLink:'bladder-disorders'
            },
            {
                linkName:'Urinary Obstruction',
                hyperLink:'urinary-obstruction'
            },
            {
                linkName:'Hydrocele',
                hyperLink:'hydrocele'
            },
            {
                linkName:'Phimosis',
                hyperLink:'phimosis'
            },
            {   
                linkName:'Varicocele',
                hyperLink:'varicocele'
            },
             {
                linkName:'Male Infertility',
                hyperLink:'male-infertility'
            },
        ],
      },
      {
        id: "varicose-veins-laser",
        title: "Varicose Veins & Laser",
        links: [
            {
                linkName:'Varicose Veins ',
                hyperLink:'varicose-veins'
            },
            {
                linkName:'Laser Piles Surgery',
                hyperLink:'laser-piles-surgery'
            },
        ],
      },
    ],
  },
  {
    menuId: "surgeries&treatments",
    content: [
      {
        id: "laparscopic-surgeries",
        title: "Laparscopic Surgeries",
        links: [
          {
                linkName:'Laparoscopic Cholecystectomy (Gallbladder)',
                hyperLink:'laparoscopic-cholecystectomy'
          },
            {
                linkName:'Laparoscopic Appendicectomy',
                hyperLink:'laparoscopic-appendicectomy'
            },
            {
                linkName:'Laparoscopic Hernia Repair (TEP/TAPP)',
                hyperLink:'laparoscopic-hernia-repair'
            },
            {
                linkName:'Laparoscopic Nephrectomy',
                hyperLink:'laparoscopic-nephrectomy'
            },
            {
                linkName:'Diagnostic Laparoscopy',
                hyperLink:'diagnostic-laparoscopy'
            },
            {
                linkName:'Laparoscopic Adhesiolysis',
                hyperLink:'laparoscopic-adhesiolysis'
            },
        ],
      },
      {
        id: "laser-surgeries",
        title: "Laser Surgeries",
        links: [
           {
                linkName:'Laser Piles Surgery',
                hyperLink:'laser-piles-surgery'
            },
            {
                linkName:'Laser Fissure Surgery',
                hyperLink:'laser-fissure-surgery'
            },
            {
                linkName:'Laser Fistula Surgery (FiLac)',
                hyperLink:'laser-fistula-surgery',
            },
            {
                linkName:'Laser Pilonidal Sinus Treatment',
                hyperLink:'laser-pilonidal-sinus'
            },
            {
                linkName:'EVLT — Varicose Veins Treatment',
                hyperLink:'evlt-varicose-veins'
            },
        ],
      },
      {
        id: "urological-surgeries",
        title: "Urological Surgeries",
        links: [
          {
                linkName:'PCNL (Large Kidney Stones)',
                hyperLink:'pcnl'
            },
            {
                linkName:'URSL (Ureteral Stones)',
                hyperLink:'ursl'
            },
            {
                linkName:'Laser Circumcision',
                hyperLink:'laser-circumcision'
            },
            {
                linkName:' Hydrocelectomy',
                hyperLink:'hydrocelectomy'
            },
            {
                linkName:'Varicocelectomy',
                hyperLink:'varicocelectomy'
            },
            {
                linkName:'TURP (Prostate Surgery)',
                hyperLink:'turp'
            },
        ],
      },
      {
        id: "general-surgical-procedures",
        title: "General Surgical Procedures",
        links: [
           {
                linkName:'Thyroid Surgery',
                hyperLink:'thyroid-surgery'
            },
            {
                linkName:'Breast Surgery',
                hyperLink:'breast-surgery'
            },
            {
                linkName:'Trauma & Emergency Surgery',
                hyperLink:'trauma-emergency-surgery'
            },
            {
                linkName:'Colorectal Surgery',
                hyperLink:'colorectal-surgery'
            },
            {
                linkName:'GI Surgery',
                hyperLink:'gi-surgery'
            },
            {
                linkName:'Onco Surgery (Cancer)',
                hyperLink:'onco-surgery'
            },
        ],
      },
      {
        id: "endoscopic-procedures",
        title: "Endoscopic Procedures",
        links: [
            {
                linkName:'Upper GI Endoscopy',
                hyperLink:'upper-gi-endoscopy'
            },
            {
                linkName:'Colonoscopy',
                hyperLink:'colonoscopy'
            },
        ],
      },
    ],
  },
  {
    menuId: "patient-information",
    content: [
      {
        id: "rare-case",
        title: "Rare Case",
        links: [
          {
            linkName:"Rare case",
            hyperLink:'rare-cases'
          }
        ],
      },
    ],
  },
  {
    menuId: "gallery",
    content: [
      {
        id: "gallery",
        title: "Gallery",
        links: [
          {
            linkName:'Certifications',
            hyperLink:'certifications'
          },
          {
            linkName:'Award',
            hyperLink:'awards'
          },
          {
            linkName:'Print Media',
            hyperLink:'print-media'
          }
        ],
      },
    ],
  },
  {
    menuId: "testimonial",
    content: [
      {
        id: "testimonial",
        title: "Testimonial",
        links: [
          {
            linkName:'Video Testimonial',
            hyperLink:'video-testimonial'
          }
        ],
      },
    ],
  },
];

const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const [activeMenu, setActiveMenu] = useState([]);
  const [subMenuActive, setSubMenuActive] = useState(null);
  const [selectedMainMenu,setSelectedMainMenu]=useState()

  function handleMenuShow(menuId) {
    const data = menuData.find((item) => item.menuId === menuId);

    if (!data || !data.content?.length) {
      setActiveMenu([]);
      setSubMenuActive(null);
     
      setShow(false);
      return;
    }

    setActiveMenu(data.content);
    setSelectedMainMenu(menuId)
    setSubMenuActive(data.content[0]);
    setShow(true);
  }

  function handleMenuHide() {
    setShow(false);
  }

  return (
    <div className="container-fluid bg-light position-relative">
      <nav className="navbar navbar-expand-lg navbar-light bg-light container-lg p-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Home
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse p-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item p-1">
                <a href="/about" className="nav-link active" aria-current="page">
                  About Dr.
                </a>
              </li>
               <li
                className="nav-item p-1 d-flex justify-content-center align-items-center"
                onMouseEnter={() => handleMenuShow("diseases-we-treat")} onMouseLeave={()=>setShow(false)}
              >
                <a href="/#" className="nav-link">
                  Disease We Treat
                </a>
                 <span
                  className="bi bi-caret-down mt-1"
                  style={{ fontSize: "13px" }}
                ></span>
              </li>

              <li
                className="nav-item p-1 d-flex justify-content-center align-items-center"
                onMouseEnter={() => handleMenuShow("surgeries&treatments")} onMouseLeave={()=>setShow(false)}
              >
                <a href="/#" className="nav-link">
                  Surgeries & Treatment
                </a>
                 <span
                  className="bi bi-caret-down mt-1"
                  style={{ fontSize: "13px" }}
                ></span>
              </li>

              <li
                className="nav-item p-1 d-flex justify-content-center align-items-center"
                onMouseEnter={() => handleMenuShow("patient-information")} onMouseLeave={()=>setShow(false)}
              >
                <a href="/#" className="nav-link">
                  Patient Information
                </a>
                <span
                  className="bi bi-caret-down mt-1"
                  style={{ fontSize: "13px" }}
                ></span>
              </li>

              <li
                className="nav-item p-1 d-flex justify-content-center align-items-center"
                onMouseEnter={() => handleMenuShow("gallery")} onMouseLeave={()=>setShow(false)}
              >
                <a href="/#" className="nav-link">
                  Gallery
                </a>
                <span
                  className="bi bi-caret-down mt-1"
                  style={{ fontSize: "13px" }}
                ></span>
              </li>

              <li
                className="nav-item p-1 d-flex justify-content-center align-items-center"
                onMouseEnter={() => handleMenuShow("testimonial")} onMouseLeave={()=>setShow(false)}
              >
                <a href="/#" className="nav-link">
                  Testimonial
                </a>
                <span
                  className="bi bi-caret-down mt-1"
                  style={{ fontSize: "13px" }}
                ></span>
              </li>

              <li className="nav-item p-1 d-flex justify-content-center align-items-center">
                <a href="/contact-us" className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className={`mega-menu-wrapper position-absolute start-0 rounded-0 z-1 p-3 border shadow bg-white w-100 ${
          show ? "d-block" : "d-none"
        }`}
        style={{ height: "52vh" }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div className="d-flex end-0 pe-3 position-absolute">
          <button
            className="btn btn-close btn-sm"
            onClick={() => setShow(false)}
          ></button>
        </div>

        <div className="row">
          {/* Left Sidebar */}
          <div className="col-md-3 d-flex flex-column flex-wrap border-end">
            {activeMenu?.map((item) => (
              <span
                key={item.id}
                className={`d-flex justify-content-between sidebar-item fw-semibold text-start px-3 py-2 rounded ${
                  subMenuActive?.id === item.id ? `text-website-primary` : "text-dark"
                }`}
                onMouseEnter={() => setSubMenuActive(item)}
                style={{ cursor: "pointer", transition: "0.3s", fontSize: "14px" }}
              >
                <span>{item.title}</span>
                <span className="bi bi-chevron-right fs-6"></span>
              </span>
            ))}
          </div>

          {/* Right Content */}
          <div className="col-md-9 d-flex flex-column flex-wrap">
            <div
              className="d-flex flex-column flex-wrap align-content-start text-start"
              style={{ fontSize: "14px", height: "47vh", columnGap: "80px" }}
            >
              {subMenuActive?.links?.map((link, index) => (
                (selectedMainMenu!=='patient-information'&&selectedMainMenu!=='gallery'&&selectedMainMenu!=='testimonial')?
                <a
                  href={`/${selectedMainMenu}/${subMenuActive.id}/${link.hyperLink}`}
                  key={index}
                  className="text-decoration-none text-dark px-2 rounded hover-link py-2"
                >
                  {link.linkName}
                </a>:
                <a
                  href={`/${selectedMainMenu}/${link.hyperLink}`}
                  key={index}
                  className="text-decoration-none text-dark px-2 rounded hover-link py-2"
                >
                  {link.linkName}
                </a>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;