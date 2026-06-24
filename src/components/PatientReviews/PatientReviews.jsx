import React, { useEffect } from "react";

const PatientReviews = () => {
  useEffect(() => {
    // agar script already added hai to dubara mat add karo
    const existingScript = document.querySelector(
      'script[src="https://widgets.sociablekit.com/google-reviews/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <div className="container mt-5 text-start">
        <h2>Patient Google Reviews</h2>

        <div
          className="sk-ww-google-reviews border-0"
          data-embed-id="25692147"
        ></div>
      </div>
    </div>
  );
};

export default PatientReviews;