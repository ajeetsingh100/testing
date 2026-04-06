import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import SwiperCore from "swiper";
import { Autoplay ,FreeMode} from "swiper/modules";

SwiperCore.use([Autoplay]);


import freeService from '../../Data/freeService'
import FreeServiceCard from './FreeServiceCard';


const FreeServiceSlider=() => {
  return (
    <Swiper
  modules={[Autoplay, FreeMode]}
  loop={true}
  
  speed={3000}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  freeMode={{
    enabled: true,
    momentum: false,
  }}
  breakpoints={{
    480: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.8,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 35,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }}
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