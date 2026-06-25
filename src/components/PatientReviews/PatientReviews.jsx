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
  }, []);

  return (
    <div className="container px-3 mt-2 text-start">   

      <div
        className="sk-ww-google-reviews"
        data-embed-id="25692147"
        style={{border:"0",padding:"0"}}
      ></div>
    </div>
  );
};

export default PatientReviews;