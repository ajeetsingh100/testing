import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';

import doctorData from '../../Data/doctor';
import DoctorCard from './DoctorCard';

const DoctorSlider = () => {
  const swiperRef1 = useRef(null);

  return (
    <div className="container overflow-hidden py-3">

      {/* Navigation Buttons */}
      <div className="d-flex gap-2 mb-3 justify-content-end">
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => swiperRef1.current?.slidePrev()}
        >
          <i className="bi bi-arrow-left"></i>
        </button>

        <button
          className="btn btn-sm btn-secondary"
          onClick={() => swiperRef1.current?.slideNext()}
        >
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef1.current = swiper)}

        // ✅ Fix resize issue
        onResize={() => swiperRef1.current?.update()}
        observer={true}
        observeParents={true}

        slidesPerView={1}      // ✅ Mobile default
        spaceBetween={15}
        grabCursor={true}

        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 15,
            centeredSlides: true
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 25
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }}
      >
        {doctorData?.map((data, index) => (
          <SwiperSlide key={index}>
            <DoctorCard
              doctorName={data.doctorName}
              qualification={data.qualification}
              doctorImage={data.doctorImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default DoctorSlider;