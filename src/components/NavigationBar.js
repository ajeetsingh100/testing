import React, { useState } from "react";
import { Link } from "react-router-dom";

import menuData from "../Data/menuData";
import { Offcanvas } from "react-bootstrap";

const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const [activeMenu, setActiveMenu] = useState([]);
  const [subMenuActive, setSubMenuActive] = useState(null);
  const [selectedMainMenu,setSelectedMainMenu]=useState()
  // OFFCANVAS SETUP
  const [showMainMenu,setShowMainMenu]=useState(false)
  const [showSubMenu,setShowSubMenu]=useState(false)
  const [subMenu,setSubMenu]=useState({})
  const [showActiveMenuOffcanvas,setShowActiveMenuOffcanvas]=useState(false)
  const [activeMenuOffcanvas,setActiveMenuOffcanvas]=useState([])

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

  //OFFCANVAS FUNCTION
  function handleMainMenu(selectedMenuId){
        console.log(selectedMenuId)
        const subMenu=menuData.find(menu=>menu.menuId===selectedMenuId)
        console.log(subMenu)
        setSubMenu(subMenu)
    }
    function handleActiveMenu(links){
        setActiveMenuOffcanvas(links)
    }
    function handleMainMenuClose(){
        setShowMainMenu(false)
    }
    function handleSubMenuClose(){
        setShowSubMenu(false)
    }
    function handleActiveMenuClose(){
        setShowActiveMenuOffcanvas(false)
    }

    function changeCase(title){
        const splittedWord=title.split('-')
        const casedWord=splittedWord.map(word=>word[0].toUpperCase()+word.slice(1,))
        console.log(casedWord.join(' '))
        return casedWord.join(' ')
    }

  return (
    <div className="container-fluid bg-light position-relative">
      <nav className="navbar navbar-expand-lg navbar-light bg-light container-lg p-0">
        <div className="container">
          <a  href='/' className="fw-bold text-decoration-none text-dark">
              Home
          </a>
          <button
            className="btn btn-light border border-1 d-block d-lg-none"
            type="button"
            onClick={()=>setShowMainMenu(true)}                     
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse p-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
              <li className="nav-item ">
                <a href="/about" className="nav-link active py-2" aria-current="page">
                  About Dr.
                </a>
              </li>
               <li
                className="nav-item  d-flex justify-content-center align-items-center"
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
                className="nav-item d-flex justify-content-center align-items-center"
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
                className="nav-item  d-flex justify-content-center align-items-center"
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
                className="nav-item  d-flex justify-content-center align-items-center"
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
                className="nav-item  d-flex justify-content-center align-items-center"
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

              <li className="nav-item  d-flex justify-content-center align-items-center">
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
      {/* OFFCANVAS SETUP */}
      {/* main menu  */}
               <Offcanvas show={showMainMenu} onHide={handleMainMenuClose}>
               <Offcanvas.Header  style={{backgroundColor:'var(--website-primary)'}} closeButton >
                  <img src="https://res.cloudinary.com/dodhn4tgj/image/upload/q_auto/f_auto/v1775210500/Advance_Laparoscopic_Surgeon_Proctologist_Urologist_Endoscopist_and_gastrologisttt_tcfg5z.png" alt="" width={200}/>
                 
               </Offcanvas.Header>
               <Offcanvas.Body className='p-0'>
                      {
                          menuData.map(menu=>
                              <div className='d-flex justify-content-between px-4 py-2'  onClick={()=>{handleMainMenu(menu.menuId);setShowSubMenu(true);setShowMainMenu(false)}}>
                                  <div className='text-start'>{changeCase(menu.title)}</div>
                                  <span className='bi bi-chevron-right '></span>
                              </div>
                          )
                      }    
              </Offcanvas.Body>
            </Offcanvas>      
            {/* sub menu */}
            <Offcanvas show={showSubMenu} onHide={handleSubMenuClose}>
                  <Offcanvas.Header  style={{backgroundColor:'var(--website-primary)'}} closeButton >
                      <img src="https://res.cloudinary.com/dodhn4tgj/image/upload/q_auto/f_auto/v1775210500/Advance_Laparoscopic_Surgeon_Proctologist_Urologist_Endoscopist_and_gastrologisttt_tcfg5z.png" alt="" width={200}/>
                  </Offcanvas.Header>
                  <Offcanvas.Body className='p-0'>
                      <div className='d-flex px-4 py-2' onClick={()=>{setShowSubMenu(false);setShowMainMenu(true)}}>
                          <span className='bi bi-arrow-left-circle me-2'></span>
                          <div>
                              Back to previous
                          </div>
                        
                      </div>
                      {
                          subMenu?.content?.map(menu=>
                              <div className='d-flex justify-content-between px-4 py-2'  onClick={()=>{handleActiveMenu(menu);setShowActiveMenuOffcanvas(true)}}>
                                  <div className='text-start'>{menu.title.split('-').join(' ')}</div>
                                  <span className='bi bi-chevron-right '></span>
                              </div>
                          )
                      }    
                  </Offcanvas.Body>
            </Offcanvas>
            {/* active menu */}
             <Offcanvas show={showActiveMenuOffcanvas} onHide={handleActiveMenuClose}>
                  <Offcanvas.Header  style={{backgroundColor:'var(--website-primary)'}} closeButton >
                      <img src="https://res.cloudinary.com/dodhn4tgj/image/upload/q_auto/f_auto/v1775210500/Advance_Laparoscopic_Surgeon_Proctologist_Urologist_Endoscopist_and_gastrologisttt_tcfg5z.png" alt="" width={200}/>
                  </Offcanvas.Header>
                  <Offcanvas.Body className='p-0'>
                      <div className='d-flex px-4 py-2' onClick={()=>{setShowActiveMenuOffcanvas(false);setShowSubMenu(true)}}>
                          <span className='bi bi-arrow-left-circle me-2'></span>
                          <div>
                              Back to previous
                          </div>                  
                      </div>
                      {
                          activeMenuOffcanvas?.links?.map(link=>
                               subMenu.menuId!=='patient-information'&&subMenu.menuId!=='gallery'&&subMenu.menuId!=='testimonial'?
                                <div className='d-flex justify-content-between px-4 py-2'>
                                    <a className='text-start text-decoration-none text-dark' href={`/${subMenu.menuId}/${activeMenuOffcanvas.id}/${link.hyperLink}`}>{link.linkName}</a>    
                                </div>:
                                <div className='d-flex justify-content-between px-4 py-2'>
                                    <a className='text-start text-decoration-none text-dark' href={`/${subMenu.menuId}/${link.hyperLink}`}>{link.linkName}</a>    
                                </div>
                          )
                      }    
                  </Offcanvas.Body>
            </Offcanvas>
    </div>
  );
};

export default NavigationBar;