import React from "react";
import CountUp from "react-countup";


const Statistics = () => {
  const data = [
    { number: "40000", label: "SURGERIES PERFORMED" },
    { number: "25", label: "YEARS OF EXPERIENCE" },
    { number: "200", label: "BEDS & 24/7 ICU" },
    { number: "FREE", label: "OPD EVERY TUESDAY" },
  ];

  return (
    <div className="stats-section">
      <div className="container">
        <div className="row text-center">
          {data.map((item, index) => (
            <div key={index} className="col-md-3 stat-box">
            <h2> {item.number==='FREE'?<>{item.number}</>:<><CountUp  end={+item.number} duration={3}  enableScrollSpy />+</>}</h2>
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