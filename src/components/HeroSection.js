import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { apiconnector } from "../services/apiconnector";
import { jsx } from "react/jsx-runtime";
import { SERVER_API } from "../services/api";



const HeroSection = () => {
  const [slidesData,setSlideData]=useState([])
  async function loadSlidesData(){
    const response=await apiconnector("get",`${SERVER_API.MAIN_SERVER}/api/v1/slide/get-all-slides`)
    console.log(response.data)
    setSlideData(response.data.allSlides)

  }
  useEffect(()=>{loadSlidesData()},[])
 
  return (
    <div>
      <Carousel fade>
      {
        slidesData.map(slide=>
           <Carousel.Item interval={3000}>
            <div className='position-relative'>
                <img src={slide.thumbnail} alt="first image" />
            </div>
            <Carousel.Caption className="position-absolute top-0 start-0 d-flex flex-column  justify-content-center align-items-center w-100 h-100" style={{ background: 'rgb(208, 108, 30,0.4)'}}>
              <h1 className="">{slide.title}</h1>
              <p>{slide.subTitle}</p>             
            </Carousel.Caption>
           </Carousel.Item>     
        )
      }
    </Carousel>
    
    </div>
  );
};

export default HeroSection;