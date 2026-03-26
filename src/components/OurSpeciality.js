import React from "react";


const data = [
  {
    title: "Pediatric Urology",
    img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
    desc: "Advanced care for pediatric urology conditions."
  },
  {
    title: "Pediatric Surgery",
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    desc: "Safe and effective surgical solutions for children."
  },
  {
    title: "Pediatric Robotic Surgery",
 img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&auto=format&fit=crop",
    desc: "Robotic surgery revolutionizing pediatric care."
  },
  {
    title: "New Born Surgery",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    desc: "Specialized care for newborn surgical conditions."
  }
];
const OurSpeciality = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Our Speciality</h2>

        <div className="row g-4">
          {data.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card speciality-card">
                
                {/* IMAGE */}
                <img src={item.img} className="card-img" alt={item.title} />

                {/* OVERLAY */}
                <div className="overlay">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                  <a href="#">Read More →</a>
                </div>

                {/* TITLE (default visible) */}
                <div className="card-title-box">
                  <h5>{item.title}</h5>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpeciality;