import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import Card from './Card';
import serviceData from '../../Data/serviceData';
import { useRef } from 'react';

const ServiceSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="container  overflow-hidden ">

      {/* Navigation Buttons */}
      <div className="d-flex gap-2 mb-3 justify-content-end">
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <i className="bi bi-arrow-left"></i>
        </button>

        <button
          className="btn btn-sm btn-secondary"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        
          // ✅ Mobile default
        spaceBetween={15}   // ✅ Small gap for mobile
        grabCursor={true}

        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {serviceData?.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              cardName={card.serviceName}
              cardImg={card.logo}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default ServiceSlider;