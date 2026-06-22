import React, { useState } from "react";


function HoverSidebarMenu() {
  const menuData = [
    {
      id: "gastrointestinal",
      title: "Gastrointestinal Diseases",
      links: ["Gallbladder Stones (Choleslithiasis)", "Appendicitis", "Hernia (Inguinal, Umbilical, Incisional)", "Acid Reflux (GERD)","Intestinal Disorders",'Peptic Ulcer','Intestical Obstruction', 'Pancreatitis']
    },
    {
      id: "practology",
      title: "Proctology (Ano-Rectal)",
      links: ["Piles (Hemorrhoids)", "Anal Fissure", "Fistula-in-Ano", "Pilonidal Sinus",'Rectal Bleeding & Pain','Rectal Prolapse','Perianal Abscess']
    },
    {
      id: "urological",
      title: "Urological Conditions",
      links: ["Kidney Stones", "Urinary Tract Infections", "Prostate Problems (BPH)", "Bladder Disorders",'Urinary Obstruction','Hydrocele','Phimosis','Varicocele','Male Infertility']
    },
    {
      id: "laparoscopic",
      title: "Laparoscopic Surgery",
      links: ["Laparoscopic Cholecystectomy", "Laparoscopic Appendicectomy", "Laparoscopic Hernia Repair", "Laparoscopic Nephrectomy",'Diagnostic Laparoscopy']
    },
    {
      id: "varicose",
      title: "Varicose Veins & Laser",
      links: ["Varicose Veins (EVLT)", "Laser Piles Surgery"]
    },

  ];
  const [show,setShow]=useState(false)
  const [activeMenu, setActiveMenu] = useState(menuData[0]);

  return (
    
    <div>
      <span onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        <span className="position-relative">show</span>
        <div>
          <div className={`mega-menu-wrapper position-absolute z-1 p-3 border rounded shadow bg-white w-100  ${show?`d-block`:`d-none`}`} style={{height:'52vh'}}>
            <div className="row">
              {/* Left Sidebar */}
              <div  className="col-md-3 d-flex flex-column flex-wrap  border-end">
                {menuData.map((item) => (
                  
                  <span
                    key={item.id}
                    className={`d-flex flex-row justify-content-between d-flex flex-row  flex-wrap justify-content-between sidebar-item fw-semibold text-start px-3 py-2 rounded  ${
                      activeMenu.id === item.id ? " text-primary" : "text-dark"
                    }`}
                    onMouseEnter={() => setActiveMenu(item)}
                    style={{ cursor: "pointer", transition: "0.3s",fontSize:'14px' }}
                  >
                   <span className="">{item.title}</span> <span className="bi bi-chevron-right fs-6"></span>
                  </span>
                  
                  
                ))}
                
              </div>

              {/* Right Content */}
              <div className="col-md-9 d-flex flex-column flex-wrap">
              
                <div className="d-flex flex-column flex-wrap align-content-start text-start" style={{fontSize:"14px",height:'47vh',columnGap:"80px"}}>
                  {activeMenu.links.map((link, index) => (
                    <a
                      href="/#"
                      key={index}
                      className="text-decoration-none text-dark px-2 rounded hover-link  border-dark py-2 "
                    >
                      {link}
                    </a>
                  ))}
                 
                </div>
              </div>
            </div>
          </div>

        </div>
      
      
    </span>
    </div>
  );
}

export default HoverSidebarMenu;