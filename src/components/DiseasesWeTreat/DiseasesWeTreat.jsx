import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import diseaseWeTreatContent from '../../Data/diseaseWeTreatContent'
import diseaseWeTreat from '../../Data/diseaseWeTreat'

import Content from '../Content'

const DiseasesWeTreat = () => {
  const { searchedKeyword1, searchedKeyword2 } = useParams()

  const [data, setData] = useState()
  const [sidebarData,setSidebarData]=useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const sideMenuData=diseaseWeTreat.filter(data=>data.navTo===searchedKeyword1)
    
    setSidebarData(sideMenuData)
    const fetchdata = diseaseWeTreatContent.filter(
      item => item.navTo === searchedKeyword2
    )
    console.log(fetchdata)
    setData(fetchdata)
    setLoading(false)

  }, [searchedKeyword2])
  function changeCase(str){
    const result = str.searchedKeyword2.toLowerCase().replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
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
                    Home  | Diseased We Treat | <span className='text-warning'> {changeCase({searchedKeyword2})}</span>
              </div>
            </div>

      </div>
      <div className=' container  row '>
        <div className='col-4'>          
            {loading?(<p>Loading</p>):(
              <div>
                <table className=' table text-start table-bordered  table-hover'>
                  <tbody>
                  {
                    sidebarData[0]?.links.map(link=>
                      <tr className=''>
                       <td className=' bg-light' ><a href={`/diseases-we-treat/${searchedKeyword1}/${link.hyperLink}`} className='text-decoration-none' style={{color:"#7A0404"}}><div>{link.linkName} </div></a></td>
                      </tr>
                    )
                  }
                  </tbody>
                </table>
              </div>
            )

            }
        
        </div>
        <div className='col-8'>
          {
            data?.map((item)=>(
              <Content title={item.title} sections={item.sections}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DiseasesWeTreat