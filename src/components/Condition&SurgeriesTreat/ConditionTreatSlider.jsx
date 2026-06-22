import { Swiper, SwiperSlide } from 'swiper/react';

import conditionTreat from '../../Data/conditionTreat';

// Import Swiper styles
import 'swiper/css';
import SwiperCore from "swiper";
import { Autoplay ,FreeMode} from "swiper/modules";
import ConditionAndSurgeriesCard from './ConditionAndSurgeriesCard';

SwiperCore.use([Autoplay]);




const ConditionTreatSlider=() => {
  return (
     <Swiper
        dir='rtl'
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
            slidesPerView: 1,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 1.4,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
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
      {
        conditionTreat?.map(data=>
          <SwiperSlide>
            <ConditionAndSurgeriesCard title={data.title} description={data.description}/>
          </SwiperSlide>
        )
      }
    </Swiper>

  );
};

export default ConditionTreatSlider;