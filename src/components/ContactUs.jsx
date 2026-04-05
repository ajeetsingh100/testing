import React from 'react'
import { useParams } from 'react-router-dom'

const ContactUs = () => {


 
  function changeCase(str){
    const result = str.toLowerCase().replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
    return result
  }
  return (
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
                    Home  | <span className='text-warning'> {changeCase('contact-us')}</span>
              </div>
            </div>

      </div>
      <div className=' container  row '>
        <div className='col-4'>          
            <div>
                <table className=' table text-start table-bordered  table-hover'>
                  <tbody>
                  
                   
                      <tr className=''>
                       <td className=' bg-light' ><a href={`/contact-us`} className='text-decoration-none' style={{color:"#7A0404"}}><div>Contact Us </div></a></td>
                      </tr>
                    
                  
                  </tbody>
                </table>
              </div>
        
        </div>
        <div className='col-8'>
          <section className="container text-start">
      
      <h2 className=" mb-4 fw-bold">
            {changeCase('contact-us')}
      </h2>

       <div className="row g-3 g-md-4">
          <p className='fs-5 text-muted '>
             Address<br/>
             40A, Neem Sarai, Mundera Mandi (opposite: West Gate), Dhoomanganj, Prayagraj, Uttar Pradesh - 211011.<br/>
           +91 - 9450405584, 9005709090
          </p>
    </div>

    </section>
        </div>
      </div>
    </div>    
  )
}

export default ContactUs