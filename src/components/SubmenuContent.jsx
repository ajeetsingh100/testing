import React, { useEffect, useState } from 'react'
import existingData from '../Data/data'
import { useParams } from 'react-router-dom'

const SubmenuContent = () => {
  const { searchedKeyword } = useParams()

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const fetchdata = existingData.filter(
      item => item.navTo === searchedKeyword
    )

    setData(fetchdata)
    setLoading(false)

  }, [searchedKeyword])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data?.map((item, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: item.htmlBody }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default SubmenuContent