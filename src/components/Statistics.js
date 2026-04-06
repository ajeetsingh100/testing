import React from "react";
import CountUp from "react-countup";


const Statistics = () => {
  const data = [
    { number: "25", label: "YEARS OF EXCELLENCE" },
    { number: "50000", label: "PATIENTS TREATED" },
    { number: "30", label: "SKILLED SPECIALISTS" },
    { number: "5000", label: "SUCCESSFUL SURGERIES" },
  ];

  return (
    <div className="stats-section">
      <div className="container">
        <div className="row text-center">
          {data.map((item, index) => (
            <div key={index} className="col-md-3 stat-box">
            <h2> <CountUp  end={+item.number} duration={3}  enableScrollSpy />+</h2>
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