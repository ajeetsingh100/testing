import React from "react";
import { Carousel } from "react-bootstrap";



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
    <div>
      <Carousel fade>
      <Carousel.Item interval={3000}>
        <div className='position-relative'>
             <img src={slidesData[0].img} alt="first image" />
        </div>
        <Carousel.Caption className="position-absolute top-0 start-0 d-flex flex-column  justify-content-center align-items-center w-100 h-100" style={{ background: 'rgb(208, 108, 30,0.4)'}}>
          <h1 className="">Welcome to our clinic</h1>
          <p>We provide the best healthcare services</p>
          <button className="btn btn-light fw-semibold">Book appointment</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} >
         <div className='position-relative'>
             <img src={slidesData[1].img} alt="first image" />
        </div>
        <Carousel.Caption className="position-absolute top-0 start-0 d-flex flex-column  justify-content-center align-items-center w-100 h-100" style={{ background: 'rgb(208, 108, 30,0.4)'}}>
          <h1>Expert doctors</h1>
          <p>Highly qualified and experienced team.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
         <div className='position-relative'>
             <img src={slidesData[2].img} alt="first image" />
        </div>
        <Carousel.Caption className="position-absolute top-0 start-0 d-flex flex-column  justify-content-center align-items-center w-100 h-100" style={{ background: 'rgb(208, 108, 30,0.4)'}}>
          <h1>Advance treatments</h1>
          <p>Latest technology and modern care</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
         <div className='position-relative'>
             <img src={slidesData[3].img} alt="first image" />
        </div>
        <Carousel.Caption className="position-absolute top-0 start-0 d-flex flex-column  justify-content-center align-items-center w-100 h-100" style={{ background: 'rgb(208, 108, 30,0.4)'}}>
          <h1>Patient first approach</h1>
          <p>Your heatlth is our priority</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
         <div className='position-relative'>
             <img src={slidesData[4].img} alt="first image" />
        </div>
        <Carousel.Caption className="position-absolute top-0 start-0 d-flex flex-column  justify-content-center align-items-center w-100 h-100" style={{ background: 'rgb(208, 108, 30,0.4)'}}>
          <h1>24/7 Support</h1>
          <p>We are always here for you</p>
          <button className="btn btn-sm btn-light">Contact us</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </div>
  );
};

export default HeroSection;