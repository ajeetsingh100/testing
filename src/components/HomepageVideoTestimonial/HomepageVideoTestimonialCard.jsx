import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const HomepageVideoTestimonialCard = ({videoId,swiperRef}) => {
    const [show,setShow]=useState(false)
 const handleOpenVideo = () => {
  swiperRef?.current?.autoplay?.pause();
  setShow(true);
};

const handleCloseVideo = () => {
  setShow(false);

  setTimeout(() => {
    if (swiperRef?.current) {
      swiperRef.current.update();
      swiperRef.current.autoplay.resume();
    }
  }, 150);
};

  return (
    <div>
     <div
        className="position-relative overflow-hidden rounded-3"
        onClick={() => handleOpenVideo()}
        style={{
          width: "290px",
          height: "262px",
          cursor: "pointer",
          backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* dark overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,0.2)" }}
        />

        {/* custom play button */}
         <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{ background: "rgba(0,0,0,0.2)" }}
  />

  <div className="video-play-btn">
    <div className="circle outer"></div>
    <div className="circle middle"></div>
    <div className="circle inner">
      <i className="bi bi-play-fill play-icon"></i>
    </div>
  </div>
</div>

      {/* Big Video Modal */}
     <Modal
  show={show}
  onHide={() => handleCloseVideo()}
  centered
  dialogClassName="custom-video-modal"
  backdrop={true}
    backdropClassName="video-modal-backdrop"
>
  <div className="video-modal-wrapper position-relative">
    
    {/* close button outside video */}
    <button
      onClick={() => setShow(false)}
      className="video-close-btn"
    >
      ×
    </button>

    <Modal.Body className="p-0 bg-black rounded overflow-hidden">
      <div className="video-frame-wrapper">
        <iframe
          width="100%"
          height="100%"
          src={show ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : ""}
          title="YouTube video player"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Modal.Body>
  </div>
</Modal>

    </div>
  )
}

export default HomepageVideoTestimonialCard