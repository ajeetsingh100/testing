import React, { useEffect } from "react";

const PatientReviews = () => {
  useEffect(() => {
    const scriptSrc =
      "https://widgets.sociablekit.com/google-reviews/widget.js";

    const existingScript = document.querySelector(
      `script[src="${scriptSrc}"]`
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    // Branding hide
    const interval = setInterval(() => {
      const branding = document.querySelectorAll('.sk_branding');
      branding.forEach((el) => {
        el.style.setProperty('display', 'none', 'important');
      });
    }, 500);

    setTimeout(() => clearInterval(interval), 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container px-3 mt-3 text-start">
      <style>{`
        .sk_branding {
          display: none !important;
          visibility: hidden !important;
        }

        /* Popup z-index fix */
        .sk-ww-google-reviews [class*="modal"],
        .sk-ww-google-reviews [class*="popup"],
        .sk-ww-google-reviews [class*="overlay"],
        .sk-ww-google-reviews [class*="backdrop"],
        body > div[class*="sk-"],
        body > div[class*="modal"][style*="position: fixed"] {
          z-index: 99999 !important;
        }

        /* ============ CLOSE BUTTON FIX ============ */
        /* Sirf ACTIVE close button ko visible karo - homepage pe nahi dikhega */
        .sk-post-modal__btn-close--active {
          position: fixed !important;
          top: 20px !important;
          right: 20px !important;
          width: 44px !important;
          height: 44px !important;
          border-radius: 50% !important;
          background: rgba(0, 0, 0, 0.6) !important;
          border: none !important;
          cursor: pointer !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 0 !important;
          z-index: 9999999 !important;
          opacity: 1 !important;
          visibility: visible !important;
          transition: background 0.2s !important;
        }

        .sk-post-modal__btn-close--active:hover {
          background: rgba(0, 0, 0, 0.9) !important;
        }

        /* Close button ka X icon white aur visible */
        .sk-post-modal__btn-close--active .sk-post-modal__btn-close-icon,
        .sk-post-modal__btn-close--active svg {
          width: 22px !important;
          height: 22px !important;
          fill: #ffffff !important;
          opacity: 1 !important;
          visibility: visible !important;
          display: block !important;
        }

        .sk-post-modal__btn-close--active svg path {
          fill: #ffffff !important;
        }

        .sk-post-modal__btn-close--active:hover svg,
        .sk-post-modal__btn-close--active:hover svg path {
          fill: #ffffff !important;
        }

        /* ============ NEXT/PREV HOVER (close button ko exclude karo) ============ */
        [class*="sk-"] button:not(.sk-post-modal__btn-close):hover,
        [class*="sk-"] [class*="next"]:hover,
        [class*="sk-"] [class*="prev"]:hover,
        [class*="sk-"] [class*="arrow"]:hover {
          background-color: rgba(255, 255, 255, 0.2) !important;
          color: #fff !important;
          opacity: 1 !important;
        }

        [class*="sk-"] button:not(.sk-post-modal__btn-close):hover svg,
        [class*="sk-"] button:not(.sk-post-modal__btn-close):hover svg path,
        [class*="sk-"] [class*="next"]:hover svg,
        [class*="sk-"] [class*="next"]:hover svg path,
        [class*="sk-"] [class*="prev"]:hover svg,
        [class*="sk-"] [class*="prev"]:hover svg path,
        [class*="sk-"] [class*="arrow"]:hover svg,
        [class*="sk-"] [class*="arrow"]:hover svg path {
          fill: #fff !important;
          stroke: #fff !important;
          color: #fff !important;
        }
      `}</style>

      <div
        className="sk-ww-google-reviews"
        data-embed-id="25692147"
        style={{ border: "0", padding: "0" }}
      ></div>
    </div>
  );
};

export default PatientReviews;