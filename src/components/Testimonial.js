import React from "react";

const Testimonials = () => {
  return (
    <div className="container py-5">

      {/* Heading */}
      <p className="text-muted mb-1">Patient Testimonials</p>
      <h2 className="fw-bold mb-4">
        What do our <span className="text-primary">patients say?</span>
      </h2>

      {/* Videos */}
      <div className="row g-4">

        {/* Card 1 */}
        <div className="col-md-4">
          <div className="testimonial-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
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
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                title="video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="testimonial-card">
            <div className="video-wrapper empty">
              <span className="play-btn">▶</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="d-flex align-items-center justify-content-between mt-4 flex-wrap gap-3">

        <button className="btn btn-primary rounded-pill px-4">
          READ ALL TESTIMONIALS
        </button>

        {/* Google Rating */}
        <div className="google-rating d-flex align-items-center gap-2">
          <span className="fw-bold">G</span>
          <div>
            <small className="text-muted">REVIEW US ON</small><br/>
            <span className="fw-bold">GOOGLE ⭐⭐⭐⭐⭐</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Testimonials;