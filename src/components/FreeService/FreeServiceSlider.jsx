import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import freeService from '../../Data/freeService'
import FreeServiceCard from './FreeServiceCard';


const FreeServiceSlider=() => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        freeService?.map(image=>
          <SwiperSlide>
            <FreeServiceCard image={image}/>
          </SwiperSlide>
        )
      }
      
      
    </Swiper>
  );
};

export default FreeServiceSlider;