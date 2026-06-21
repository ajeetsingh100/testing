import React from "react";
import { Button } from "react-bootstrap";



function FixedButtons() {
  return (
    <div
      className="position-fixed d-flex flex-column gap-2"
      style={{
        bottom: "20px",
        right: "20px",
        zIndex: 1050,
      }}
    >
      <Button className="btn btn-success rounded-circle"><span className="bi bi-whatsapp"></span></Button>
      <Button variant="primary" className="rounded-circle"><i class="bi bi-telephone-outbound"></i></Button>
    </div>
  );
}

export default FixedButtons;