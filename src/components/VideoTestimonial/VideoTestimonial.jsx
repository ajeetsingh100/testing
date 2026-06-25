import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import videoTestimonial from '../../Data/videoTestimonial'
import { Modal } from 'react-bootstrap'
const VideoTestimonial = () => {
    const {searchedKeyword}=useParams()
     const [loading, setLoading] = useState(false)
     const [show,setShow]=useState(false)
     const [activeVideo,setActiveVideo]=useState(null)
     
     function handleOpen(videoId){
      setActiveVideo(videoId)
      setShow(true)
     }
     function handleClose(){
      setShow(false)
     }

    function changeCase(str){
    const result = str.searchedKeyword.toLowerCase().replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
    return result
    }
  return (
    <div>
        <div className='w-100  d-flex flex-column align-items-center justify-content-center'>
      <div className=' position-relative d-flex justify-content-center  mb-4 w-100 ' style={{height:'200px'}}>
        {/* Background Image */}
        <div className='w-100 h-100' 
        style={
          {
            backgroundImage: "url('https://res.cloudinary.com/dodhn4tgj/image/upload/q_auto/f_auto/v1774787112/narayan_swaroop_hospital_wdhlkk.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
        }>
        </div>
        {/* Mask */}
        <div
          className="position-absolute top-0  w-100 h-100"
          style={{
            backgroundColor: "rgb(122, 4, 4,0.9)",
          }}
          ></div>
          {/* Content */}
          <div className="container position-absolute d-flex justify-content-center align-items-center text-white w-100 h-100">
              <div className=' rounded-2 p-3' style={{backgroundColor:"rgba(182, 176, 176, 0.5)"}}>
                    Home  | Patient Information | <span className='text-warning'> {changeCase({searchedKeyword})}</span>
              </div>
            </div>

      </div>
      <div className=' container  row '>
        <div className='col-4 d-none d-md-block'>          
            {loading?(<p>Loading</p>):(
              <div>
                <table className=' table text-start table-bordered  table-hover'>
                  <tbody>
                  {/* {
                    gallery?.map(link=>
                      <tr className=''>
                       <td className=' bg-light' ><a href={`/gallery/${link.navTo}`} className='text-decoration-none' style={{color:"#7A0404"}}><div>{link.galleryName} </div></a></td>
                      </tr>
                    )
                  } */}
                  <tr className=''>
                       <td className=' bg-light' ><a href={`/testimonial/video-testimonial`} className='text-decoration-none' style={{color:"#7A0404"}}><div>Video Testimonial</div></a></td>
                      </tr>
                  </tbody>
                </table>
              </div>
            )
            

            }
        
        </div>
        <div className='col-md-8 col-12'>
          <section className="container text-start">
      
      <h2 className=" mb-4 fw-bold">
            {changeCase({searchedKeyword})}
      </h2>

       <div className="row g-3 g-md-4">
      {videoTestimonial.map((videoId, index) => {
        
            return(
                <div key={index} className="col-6">
                    <div
                  className="video-card position-relative overflow-hidden rounded-3"                    
                  onClick={() => handleOpen(videoId)}
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
                  }}
                >
                  <div className="video-overlay" />

                  <div className="video-play-btn">
                    <div className="circle outer"></div>
                    <div className="circle middle"></div>
                    <div className="circle inner">
                      <i className="bi bi-play-fill play-icon"></i>
                    </div>
                  </div>
                </div>
        </div>
            )
        
        
      })}
    </div>

    </section>
        </div>
      </div>
    </div> 
       <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="custom-video-modal"
        backdrop
        backdropClassName="video-modal-backdrop"
      >
        <div className="video-modal-wrapper position-relative">
          <button onClick={handleClose} className="video-close-btn">
            ×
          </button>

          <Modal.Body className="p-0 bg-black rounded overflow-hidden">
            <div className="video-frame-wrapper">
              <iframe
                width="100%"
                height="100%"
                src={
                  show && activeVideo
                    ? `https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`
                    : ""
                }
                title="YouTube video player"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  )
}

export default VideoTestimonial