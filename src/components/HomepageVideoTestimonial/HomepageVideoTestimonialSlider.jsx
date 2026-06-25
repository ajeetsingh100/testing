import React, { useCallback, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Modal } from "react-bootstrap";
import videoTestimonial from "../../Data/videoTestimonial";


const HomepageVideoTestimonialSlider = () => {
  const [show, setShow] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const autoScroll = useMemo(
    () =>
      AutoScroll({
        playOnInit: true,
        speed: 1.2,
        direction: "backward",
        startDelay: 0,
        stopOnMouseEnter: false, // manual hover handle karenge
        stopOnInteraction: false,
      }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      containScroll: "trimSnaps",
    },
    [autoScroll]
  );

  const stopAutoplay = useCallback(() => {
    emblaApi?.plugins()?.autoScroll?.stop();
  }, [emblaApi]);

  const startAutoplay = useCallback(() => {
    emblaApi?.plugins()?.autoScroll?.play();
  }, [emblaApi]);

  const handleOpen = (videoId) => {
    setActiveVideo(videoId);
    setShow(true);
    stopAutoplay(); // modal open -> stop
  };

  const handleClose = () => {
    setShow(false);
    setActiveVideo(null);
    startAutoplay(); // modal close -> resume
  };

  return (
    <div className="video-slider-section ">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {videoTestimonial?.map((videoId, index) => (
              <div className="embla__slide" key={index}>
                <div
                  className="video-card position-relative overflow-hidden rounded-3"
                  onMouseEnter={stopAutoplay}
                  onMouseLeave={() => {
                    if (!show) startAutoplay();
                  }}
                  onClick={() => handleOpen(videoId)}
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
                  }}
                >
                  <div className="video-overlay" />

                  <div className="video-play-btn">
                    <div className="circle outer"></div>
                    <div className="circle middle"></div>
                    <div className="circle inner">
                      <i className="bi bi-play-fill play-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="custom-video-modal"
        backdrop
        backdropClassName="video-modal-backdrop"
      >
        <div className="video-modal-wrapper position-relative">
          <button onClick={handleClose} className="video-close-btn">
            ×
          </button>

          <Modal.Body className="p-0 bg-black rounded overflow-hidden">
            <div className="video-frame-wrapper">
              <iframe
                width="100%"
                height="100%"
                src={
                  show && activeVideo
                    ? `https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`
                    : ""
                }
                title="YouTube video player"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default HomepageVideoTestimonialSlider;