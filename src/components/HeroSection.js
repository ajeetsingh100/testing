import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
 


const HeroSection = () => {
  const slidesData = [
  {
    img: "https://res.cloudinary.com/dodhn4tgj/image/upload/w_1200,f_auto,q_auto,c_fill/v1774787114/img4_r8qe0c.jpg",
    title: "Welcome to Our Clinic",
    desc: "We provide the best healthcare services",
    btn: "Book Appointment",
  },
  {
    img: 'https://res.cloudinary.com/dodhn4tgj/image/upload/v1774787112/img1_enrghm.jpg',
    title: "Expert Doctors",
    desc: "Highly qualified and experienced team",
    btn: "Meet Doctors",
  },
  {
    img: 'https://res.cloudinary.com/dodhn4tgj/image/upload/v1774787113/img3_fxanyq.jpg', 
    title: "Advanced Treatments",
    desc: "Latest technology and modern care",
    btn: "Explore Services",
  },
  {
    img:"https://res.cloudinary.com/dodhn4tgj/image/upload/v1774787112/img2_e5aia9.jpg",
    title: "Patient First Approach",
    desc: "Your health is our priority",
    btn: "Learn More",
  },
  {
    img: "https://res.cloudinary.com/dodhn4tgj/image/upload/v1774787112/img5_fabma0.jpg",
    title: "24/7 Support",
    desc: "We are always here for you",
    btn: "Contact Us",
  }

];
  return (
    <>
      <div style={{height:"80vh"}} >
        <Swiper
        spaceBetween={30}        
        effect={'fade'}
        speed={2000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="swiperx"
      >
        {
          slidesData.map(data=>
            <SwiperSlide className='swiper-slidex'>
             <img src={data.img}/>
          <div className='position-absolute top-0 start-0 w-100 h-100 d-flex flex-column  text-white justify-content-center align-items-center' style={{backgroundColor:"rgb(208, 108, 30,0.4)"}}>
           <h1>{data.title}</h1>
           <p>{data.desc}</p>
           
           <button className='btn btn-light mt-3'>{data.btn}</button>
          </div>
           </SwiperSlide>
          )
        }
        
        
         
       
      </Swiper>
      </div>
    </>
  );
}

export default HeroSection