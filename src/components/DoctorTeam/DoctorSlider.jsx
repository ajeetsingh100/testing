import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import doctorData from '../../Data/doctor'
import DoctorCard from './DoctorCard';

const DoctorSlider = () => {
  return (
    <div>
         <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        doctorData?.map(data=>
          <SwiperSlide>
           <DoctorCard doctorName={data.doctorName} qualification={data.qualification} doctorImage={data.doctorImage}/>
          </SwiperSlide>
        )
      }
      
      
    </Swiper>
    </div>
  )
}

export default DoctorSlider;



