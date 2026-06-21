import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function JourneyTimeline() { 
  const [activeId, setActiveId] = useState(3);
 const timelineData = [
  {
    id: 1,
    year: "Prior to 2007",
    shortTitle: "Ex-Registrar",
    title: "Ex-Registrar, UCMS Lucknow",
    description:
      "Trained in general and advanced laparoscopic surgery under senior faculty. Built a strong foundation in complex surgical cases and operative decision-making.",
    badge: "Foundation Phase",
  },
  {
    id: 2,
    year: "Fellowship Training",
    shortTitle: "FIAGES • FMAS • FACRSI",
    title: "Advanced Surgical Fellowships",
    description:
      "Completed advanced training in laparoscopic techniques, minimal-access surgery, and colorectal procedures through nationally recognized institutions.",
    badge: "Advanced Training",
  },
  {
    id: 3,
    year: "2007 – Present",
    shortTitle: "Director & Lead Surgeon",
    title: "Narayan Swaroop Hospital, Prayagraj",
    description:
      "Started with 20 beds and expanded the hospital to 220+ beds with 15+ specialties, while personally performing 40,000+ surgeries.",
    badge: "Leadership & Growth",
    highlight: true,
  },
];

  return (
   <section className="container  w-75 py-5">
    <h3 className="mb-5"> A timeline of milestones, achievements, and professional growth</h3>
  <ul className="timeline-with-icons text-start d-flex flex-column gap-4">
    <li className="timeline-item">
      <span className="timeline-icon ">
        <i className="bi bi-hospital "></i>
      </span>

      <h5 className="fw-bold mb-1">2007 – Present</h5>
      <p className="text-muted mb-2 fw-semibold ">Director & Lead Surgeon, Narayan Swaroop Hospital, Prayagraj</p>
      <p className="text-muted mb-0">
       
        Started with 20 beds, now 220+ beds with 15+ specialties.
        Personally performed 40,000+ surgeries.

      </p>
    </li>

    <li className="timeline-item">
      <span className="timeline-icon">
        <i className="bi bi-journal-medical"></i>
      </span>

      <h5 className="fw-bold mb-1">Prior to 2007</h5>
      <p className="text-muted mb-2 fw-semibold">Ex-Registrar, UCMS Lucknow</p>
      <p className="text-muted mb-0">
        Trained in general and advanced laparoscopic surgery under 
        senior faculty. Built foundation in complex surgical cases.

      </p>
    </li>

    <li className="timeline-item">
      <span className="timeline-icon">
        <i className="bi bi-award "></i>
      </span>

      <h5 className="fw-bold mb-1">Fellowship Training</h5>
      <p className="text-muted mb-2 fw-semibold">FIAGES, FMAS, FACRSI</p>
      <p className="text-muted mb-0">
        Advanced training in laparoscopic techniques, minimal-access 
        surgery, and colorectal procedures from nationally recognized 
        institutions.

      </p>
    </li>    
  </ul>
</section>


  );
}

export default JourneyTimeline;