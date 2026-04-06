import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Card from './Card';
import serviceData from '../../Data/serviceData';
import { useRef } from 'react';

const ServiceSlider= () => {
  const swiperRef=useRef()
  return (
    <div>
        <div className='d-flex gap-3  mb-2 justify-content-end'>
          <button
            className=" btn btn-sm btn-secondary"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <i className='bi bi-arrow-left'></i>
          </button>

          <button
            className="btn btn-sm btn-secondary"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <i className='bi bi-arrow-right'></i>
          </button>

        </div>
      <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
           breakpoints={{
               
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 ,spaceBetween:40 },
              }}
      >
      {
        serviceData?.map(card=>
          <SwiperSlide>
            <Card cardName={card.serviceName} cardImg={card.logo}/>
          </SwiperSlide>
        )
      }
      
      
    </Swiper>

    </div>    
    
  );
};
export default ServiceSlider;