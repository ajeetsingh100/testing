import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Card from './Card';
import serviceData from '../../Data/serviceData';

const ServiceSlider= () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        serviceData?.map(card=>
          <SwiperSlide>
            <Card cardName={card.serviceName} cardImg={card.logo}/>
          </SwiperSlide>
        )
      }
      
      
    </Swiper>
  );
};
export default ServiceSlider;