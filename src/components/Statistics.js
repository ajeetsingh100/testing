import React from "react";


const Statistics = () => {
  const data = [
    { number: "15+", label: "YEARS OF EXPERIENCE" },
    { number: "4000+", label: "HAPPY PATIENTS" },
    { number: "15+", label: "AWARDS" },
    { number: "5000+", label: "SURGERIES" },
  ];

  return (
    <div className="stats-section">
      <div className="container">
        <div className="row text-center">
          {data.map((item, index) => (
            <div key={index} className="col-md-3 stat-box">
              <h2>{item.number}</h2>
              <p>{item.label}</p>
              {index !== data.length - 1 && <div className="divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;