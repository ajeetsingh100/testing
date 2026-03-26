import React from "react";

const HeroSection = () => {
    const slidesData = [
  {
    img: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b",
    title: "Welcome to Our Clinic",
    desc: "We provide the best healthcare services",
    btn: "Book Appointment",
  },
  {
    img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289",
    title: "Expert Doctors",
    desc: "Highly qualified and experienced team",
    btn: "Meet Doctors",
  },
  {
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54", 
    title: "Advanced Treatments",
    desc: "Latest technology and modern care",
    btn: "Explore Services",
  },
  {
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    title: "Patient First Approach",
    desc: "Your health is our priority",
    btn: "Learn More",
  },
  {
    img: "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
    title: "24/7 Support",
    desc: "We are always here for you",
    btn: "Contact Us",
  },
  {
   img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    title: "Trusted by Thousands",
    desc: "Happy patients across the city",
    btn: "View Testimonials",
  },
];
  return (
      <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {slidesData.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="overlay-container">
              <img
               src={`${slide.img}?auto=format&fit=crop&w=1200&q=70`}
                className="d-block w-100"
                alt="slide"
              />

              {/* Overlay Content */}
              <div className="hero-overlay">
                <div className="overlay-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.desc}</p>
                  <button className="btn btn-light mt-3">
                    {slide.btn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      
    </div>
  );
};

export default HeroSection;