import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Container, Row, Col, Card } from "react-bootstrap";

function AppointmentModal() {
  const [show, setShow] = useState(false); // page load hote hi modal open

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
  });

    const handleClose = () => setShow(false);
  useEffect(() => {
  const shown = sessionStorage.getItem("appointmentModalShown");

  if (!shown) {
    const timer = setTimeout(() => {
      setShow(true);
      sessionStorage.setItem("appointmentModalShown", "true");
    }, 3000);

    return () => clearTimeout(timer);
  }
}, []);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    // submit ke baad modal close karna ho to
    setShow(false);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop="static"
      keyboard={false}
    >
         <Modal.Header className="border-0" closeButton></Modal.Header>
      <Modal.Body>
         
      <Row className="justify-content-center ">
        <Col>
          <Card className=" border-0 rounded-4">
            <Card.Body className="px-4 pb-3  ">
              <div className="text-center mb-4">
                <h2 className="fw-bold mb-1">Book an Appointment</h2>
                <p className="text-muted mb-0">
                  Fill in your details and we’ll contact you soon.
                </p>
              </div>

              <Form onSubmit={handleSubmit}>
                {/* Name */}
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label className="fw-semibold">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="py-2 rounded-3"
                  />
                </Form.Group>

                {/* Contact Number */}
                <Form.Group className="mb-4" controlId="contact">
                  <Form.Label className="fw-semibold">
                    Contact Number
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your contact number"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="py-2 rounded-3"
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button style={{backgroundColor:"#7A0404"}} type="submit" className="py-2 text-white fw-semibold border-0 rounded-3 fw-semibold">
                    Book Appointment
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    
      </Modal.Body>
    </Modal>
  );
}

export default AppointmentModal;