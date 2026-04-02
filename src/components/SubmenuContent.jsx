import React, { useEffect, useState } from 'react'
import existingData from '../Data/data'
import { useNavigate, useParams } from 'react-router-dom'

const SubmenuContent = () => {
  const param=useParams()
  const [loading,setLoading]=useState(false)
  const [data,setData]=useState(null)
  console.log(param)
  useEffect(()=>{
    let fetchdata={}

      fetchdata=existingData.filter(data=>data.navTo===param.searchedKeyword)
      console.log(fetchdata)
      setData(fetchdata)
      setLoading(true)


  },[param.searchedKeyword])

  return (
    <div>
        {data?.map((item, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: item.htmlBody }}
        />
      ))}
    </div>
  )
}

export default SubmenuContent;