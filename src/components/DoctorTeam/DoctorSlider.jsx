import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import doctorData from '../../Data/doctor'
import DoctorCard from './DoctorCard';

const DoctorSlider = () => {
    const swiperRef1=useRef()
  return (
    <div>
      <div className='d-flex gap-3  mb-2 justify-content-end'>
          <button
            className=" btn btn-sm btn-secondary"
            onClick={() => swiperRef1.current?.slidePrev()}
          >
            <i className='bi bi-arrow-left'></i>
          </button>

          <button
            className="btn btn-sm btn-secondary"
            onClick={() => swiperRef1.current?.slideNext()}
          >
            <i className='bi bi-arrow-right'></i>
          </button>

        </div>
         <Swiper
            spaceBetween={50}
          
             breakpoints={{
                320: { slidesPerView: 1, centeredSlides:true },
                576: { slidesPerView: 2 , centeredSlides:false},
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
                        onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => (swiperRef1.current = swiper)}
        >
      {
        doctorData?.map(data=>
          <SwiperSlide >
           <DoctorCard doctorName={data.doctorName} qualification={data.qualification} doctorImage={data.doctorImage}/>
          </SwiperSlide>
        )
      }
      
      
    </Swiper>
    </div>
  )
}

export default DoctorSlider;



