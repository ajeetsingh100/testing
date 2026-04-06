import React from "react";

const Testimonials = () => {
  return (
    <div className="container mt-5 py--5 text-start">

      {/* Heading */}
      <h6 className="fw-bold mb-1">Patient Testimonials</h6>
      <h2 className=" mb-4">
        What do our patients say?
      </h2>

      {/* Videos */}
      <div className="row g-4">

        {/* Card 1 */}
        <div className="col-md-4">
          <div className="testimonial-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/Qo9xi5OPdd0"
                title="video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="testimonial-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/2320566615027069/"
                width="100%"
                height="400"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                title="video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="testimonial-card">
            <div className="video-wrapper">
                <iframe
                src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1578319249717540/"
                style={{ border: "none", overflow: "hidden" }}
                height="100%"
                scrolling="no"
                frameBorder="0"
                title="video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="d-flex align-items-center justify-content-end mt-4 flex-wrap gap-3">

        <a href="/contact-us">
        <button className="btn btn-secondary  px-4">
          View More Testimonial <span className="bi bi-arrow-right"></span>
        </button>   </a>  

      </div>

    </div>
  );
};

export default Testimonials;