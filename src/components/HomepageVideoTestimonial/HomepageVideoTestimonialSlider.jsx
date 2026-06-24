import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import videoTestimonial from '../../Data/videoTestimonial';

// Import Swiper styles
import 'swiper/css';
import SwiperCore from "swiper";
import { Autoplay ,FreeMode} from "swiper/modules";

import HomepageVideoTestimonialCard from './HomepageVideoTestimonialCard';

SwiperCore.use([Autoplay]);
const HomepageVideoTestimonialSlider = () => {
    const swiperRef = useRef(null);
  return (
    <div>
         <Swiper
        dir='rtl'
        modules={[Autoplay, FreeMode]}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
         pauseOnMouseEnter: true,
          
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
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
        }}
       
    >
      {
        videoTestimonial?.map(data=>
          <SwiperSlide>
            <HomepageVideoTestimonialCard videoId={data} swiperRef={swiperRef}/>
          </SwiperSlide>
        )
      }
    </Swiper>
    </div>
  )
}

export default HomepageVideoTestimonialSlider