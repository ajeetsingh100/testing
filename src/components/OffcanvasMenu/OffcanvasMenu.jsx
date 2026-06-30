import React, { useState } from 'react'
import menuData from '../../Data/menuData'
import { Offcanvas } from 'react-bootstrap'

const OffcanvasMenu = () => {
    const [showMainMenu,setShowMainMenu]=useState(false)
    const [showSubMenu,setShowSubMenu]=useState(false)
    const [subMenu,setSubMenu]=useState({})
    const [showActiveMenuOffcanvas,setShowActiveMenuOffcanvas]=useState(false)
    const [activeMenuOffcanvas,setActiveMenuOffcanvas]=useState([])

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
    <div>
        <button class="btn btn-primary" onClick={()=>setShowMainMenu(true)}>
             Link with href
        </button>
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

  )
}

export default OffcanvasMenu