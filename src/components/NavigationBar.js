import React, { useState } from "react";
import { Link } from "react-router-dom";

const menuData = [
  {
    menuId: "disease we treat",
    content: [
      {
        id: "gastrointestinal",
        title: "Gastrointestinal Diseases",
        links: [
          "Gallbladder Stones (Choleslithiasis)",
          "Appendicitis",
          "Hernia (Inguinal, Umbilical, Incisional)",
          "Acid Reflux (GERD)",
          "Intestinal Disorders",
          "Peptic Ulcer",
          "Intestical Obstruction",
          "Pancreatitis",
        ],
      },
      {
        id: "practology",
        title: "Proctology (Ano-Rectal)",
        links: [
          "Piles (Hemorrhoids)",
          "Anal Fissure",
          "Fistula-in-Ano",
          "Pilonidal Sinus",
          "Rectal Bleeding & Pain",
          "Rectal Prolapse",
          "Perianal Abscess",
        ],
      },
      {
        id: "urological",
        title: "Urological Conditions",
        links: [
          "Kidney Stones",
          "Urinary Tract Infections",
          "Prostate Problems (BPH)",
          "Bladder Disorders",
          "Urinary Obstruction",
          "Hydrocele",
          "Phimosis",
          "Varicocele",
          "Male Infertility",
        ],
      },
      {
        id: "laparoscopic",
        title: "Laparoscopic Surgery",
        links: [
          "Laparoscopic Cholecystectomy",
          "Laparoscopic Appendicectomy",
          "Laparoscopic Hernia Repair",
          "Laparoscopic Nephrectomy",
          "Diagnostic Laparoscopy",
        ],
      },
      {
        id: "varicose",
        title: "Varicose Veins & Laser",
        links: ["Varicose Veins (EVLT)", "Laser Piles Surgery"],
      },
    ],
  },
  {
    menuId: "surgeries & treatment",
    content: [
      {
        id: "laparscopic",
        title: "Laparscopic surgeries",
        links: [
          "Laparscopic Cholecystemctomy (Gallbladder)",
          "Laparscopic Appendicectomy",
          "Laparoscopic Hernia Repair (TEP/TAPP)",
          "Laparoscopic Nephrectomy",
          "Diagnostic Laparoscopy",
          "Laparoscopic Adhesiolysis",
        ],
      },
      {
        id: "laser",
        title: "Laser Surgeries",
        links: [
          "Laser Piles Surgery",
          "Laser Fissure Surgery",
          "Laser Fistula Surgery (FiLaC)",
          "Laser Pilonidal Sinus Treatment",
          "EVLT — Varicose Veins Treatment",
        ],
      },
      {
        id: "urological",
        title: "Urological Surgeries",
        links: [
          "PCNL (Large Kidney Stones)",
          "URSL (Ureteral Stones)",
          "Laser Circumcision",
          "Hydrocelectomy",
          "Varicocelectomy",
          "TURP (Prostate Surgery)",
        ],
      },
      {
        id: "general",
        title: "General Surgical Procedures",
        links: [
          "Thyroid Surgery",
          "Breast Surgery",
          "Trauma & Emergency Surgery",
          "Colorectal Surgery",
          "GI Surgery",
          "Onco Surgery (Cancer)",
        ],
      },
      {
        id: "endoscopic",
        title: "Endoscopic Procedures",
        links: ["Upper GI Endoscopy", "Colonoscopy"],
      },
    ],
  },
  {
    menuId: "patient information",
    content: [
      {
        id: "rare",
        title: "Rare Case",
        links: ["Rare case"],
      },
    ],
  },
  {
    menuId: "gallery",
    content: [
      {
        id: "gallery",
        title: "Gallery",
        links: ["Certification", "Award", "Print Media"],
      },
    ],
  },
  {
    menuId: "testimonial",
    content: [
      {
        id: "testimonial",
        title: "Testimonial",
        links: ["Video Testimonial"],
      },
    ],
  },
];

const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const [activeMenu, setActiveMenu] = useState([]);
  const [subMenuActive, setSubMenuActive] = useState(null);

  function handleMenuShow(menuId) {
    const data = menuData.find((item) => item.menuId === menuId);

    if (!data || !data.content?.length) {
      setActiveMenu([]);
      setSubMenuActive(null);
      setShow(false);
      return;
    }

    setActiveMenu(data.content);
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
                onMouseEnter={() => handleMenuShow("surgeries & treatment")}
              >
                <a href="/#" className="nav-link">
                  Surgeries & Treatment
                </a>
              </li>

              <li
                className="nav-item p-1 d-flex justify-content-center align-items-center"
                onMouseEnter={() => handleMenuShow("patient information")}
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
                onMouseEnter={() => handleMenuShow("gallery")}
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
                onMouseEnter={() => handleMenuShow("testimonial")}
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
                <a href="/#" className="nav-link">
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
                  subMenuActive?.id === item.id ? "text-primary" : "text-dark"
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
                <a
                  href="/#"
                  key={index}
                  className="text-decoration-none text-dark px-2 rounded hover-link py-2"
                >
                  {link}
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