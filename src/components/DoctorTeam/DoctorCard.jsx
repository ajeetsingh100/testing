import React from 'react'

const DoctorCard = ({ doctorName, doctorImage, qualification }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div
        className="card bg-transparent border shadow  text-dark h-100 d-flex flex-column align-items-center text-center p-3"
        style={{ width:'15rem ',minHeight: "300px" }}
      >
        {/* Image Wrapper (Center Fix) */}
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            overflow: "hidden",   // 🔥 important
            display: "d-flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            src={doctorImage}
            alt={doctorName}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",          // 🔥 crop karega
              objectPosition: ""     // 🔥 center fix
            }}
          />
        </div>

        {/* Content */}
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h5 className="mb-2">{doctorName}</h5>
          <p className="mb-0">{qualification}</p>
        </div>
      </div>
    </div>
  )
}

export default DoctorCard