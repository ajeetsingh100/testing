import React from "react";


const Statistics = () => {
  const data = [
    { number: "25+", label: "YEARS OF EXCELLENCE" },
    { number: "50,000+", label: "PATIENTS TREATED" },
    { number: "30+", label: "SKILLED SPECIALISTS" },
    { number: "5,000+", label: "SUCCESSFUL SURGERIES" },
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