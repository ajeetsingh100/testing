import React from "react";

const VideosSection = () => {
  return (
    <div className="container py-5 text-center">
      
      {/* Heading */}
      <h2 className="fw-bold mb-4">
        Patient Informative <span className="text-primary">Videos</span>
      </h2>

      {/* Videos Row */}
      <div className="row g-4 justify-content-center">

        {/* Video 1 */}
        <div className="col-md-5">
          <div className="video-card shadow-sm">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video 2 */}
        <div className="col-md-5">
          <div className="video-card shadow-sm">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>

      {/* Button */}
      <div className="mt-4">
        <button className="btn btn-purple px-4 py-2">
          VIEW MORE
        </button>
      </div>

    </div>
  );
};

export default VideosSection;