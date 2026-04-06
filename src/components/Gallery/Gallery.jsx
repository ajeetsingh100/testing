import React, { useEffect, useState } from 'react'
import gallery from '../../Data/gallery'
import { useParams } from 'react-router-dom'
const Gallery= () => {
  const { searchedKeyword } = useParams()

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    console.log(searchedKeyword)

    const fetchdata = gallery.filter(
      item => item.navTo === searchedKeyword
    )
    console.log('hello',fetchdata)
    setData(fetchdata)
    setLoading(false)

  }, [searchedKeyword])
  function changeCase(str){
    const result = str.searchedKeyword.toLowerCase().replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
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
                    Home  | Gallery | <span className='text-warning'> {changeCase({searchedKeyword})}</span>
              </div>
            </div>

      </div>
      <div className=' container  row '>
        <div className='col-4 d-none d-md-block'>          
            {loading?(<p>Loading</p>):(
              <div>
                <table className=' table text-start table-bordered  table-hover'>
                  <tbody>
                  {
                    gallery?.map(link=>
                      <tr className=''>
                       <td className=' bg-light' ><a href={`/gallery/${link.navTo}`} className='text-decoration-none' style={{color:"#7A0404"}}><div>{link.galleryName} </div></a></td>
                      </tr>
                    )
                  }
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
      {data[0]?.image?.map((image, index) => (

        <div key={index} className="col-6">
          <div className="card  shadow h-100">
            <img
              src={image}
              className="card-img-top"
              alt="certification"
             
            />
          </div>
        </div>

      ))}
    </div>

    </section>
        </div>
      </div>
    </div>    
  )
}

export default Gallery