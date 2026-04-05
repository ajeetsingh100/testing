import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import videoTestimonial from '../../Data/videoTestimonial'
const VideoTestimonial = () => {
    const {searchedKeyword}=useParams()
     const [loading, setLoading] = useState(false)

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
        <div className='col-4'>          
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
        <div className='col-8'>
          <section className="container text-start">
      
      <h2 className=" mb-4 fw-bold">
            {changeCase({searchedKeyword})}
      </h2>

       <div className="row g-3 g-md-4">
      {videoTestimonial.map((videoLink, index) => {
        if(videoLink.split('/')[2]==='www.youtube.com'){
            return(
                <div key={index} className="col-6">
          <div className="card shadow h-100">
            <iframe
                src={videoLink}
                title="video"
                allowFullScreen
              ></iframe>
          </div>
        </div>
            )
        }
        if(videoLink.split('/')[2]==='www.facebook.com'){
            return(
                <div key={index} className="col-6">
          <div className="card shadow h-100">
            <iframe
                src={`https://www.facebook.com/plugins/video.php?href=${videoLink}/`}
                title="video"
                allowFullScreen
              ></iframe>
          </div>
        </div>
            )
        }
      })}
    </div>

    </section>
        </div>
      </div>
    </div> 
    </div>
  )
}

export default VideoTestimonial