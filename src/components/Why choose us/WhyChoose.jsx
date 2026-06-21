import { Card, Col, Container, Row } from "react-bootstrap";

const WhyChoose = () => {

const featureData = [
  {
    id: 1,    
    icon: "bi bi-heart-pulse",
    title: "Painless, Minimally-Invasive Surgery",
    description:`All procedures use laparoscopic and laser techniques — 
        2-3 small incisions instead of large cuts. Less pain, 
        minimal scarring, faster healing.`,
    iconColor:'#DC3545',
    backgroundColor:'#FFECEF'
  },
  {
    id: 2,    
    icon: "bi bi-door-open",   
    title: "Same-Day Discharge for Most Surgeries",
    description:`Piles, gallbladder, hernia — most patients go home the same 
                day or within 24 hours. No long hospital stays.`,
    iconColor:'#0DC4E8',
    backgroundColor:'#E8FBFF'
  },
  {
    id: 3,
    icon: "bi bi-patch-check",
    title: "Personal Attention, Not Delegation",
    description:`I personally see every patient in OPD, perform every surgery 
        myself, and remain available on WhatsApp for post-operative care. 
        No junior doctor handoff
        ` ,
    iconColor:'#6F42C1',
    backgroundColor:'#F3EEFF'
},
  {
    id: 4,
    icon: "bi bi-shield-check",
    title: "All Major Insurance — Cashless",
    description:`Star Health, CGHS, FHPL, Care, HDFC Ergo, Bajaj Allianz,and more. We handle all paperwork. You focus on recovery.` ,
    iconColor:'#198754',
    backgroundColor:"#EAFBF3"
},
  {
    id: 5,
    icon: "bi bi-award",
    title: "25 Years of Proven Results",
    description:`Over 40,000 successful surgeries with consistently low 
    complication and recurrence rates. Trusted by patients 
    across Prayagraj, Fatehpur, Kaushambi, and Pratapgarh`,
    iconColor:'#FD7E14',
    backgroundColor:'#FFF4E5'
},
  {
    id: 6,
    icon: "bi bi-calendar-check",
    title: "Free OPD Every Tuesday",
    description:`No consultation fee. Direct access to me. Walk-ins welcome. 
                Because cost should never stop someone from seeing a doctor.`,
    iconColor:"#0B5ED7",
    backgroundColor:'#EAF4FF' 
}
];
  return (
    <section className="doctor-features-section py-5" style={{backgroundColor:'#7D0404'}}>
      <Container>
        <div className="text-center mb-5">
          <span className="feature-badge text-white ">Why Choose me</span>
          <h2 className="feature-section-title mt-3 text-white">
            Expertise, Leadership & Surgical Excellence
          </h2>
          <p className="feature-section-subtitle mx-auto text-white">
            Decades of clinical experience, hospital leadership, and advanced
            surgical training dedicated to delivering trusted patient care.
          </p>
        </div>

        <Row className="g-4">
          {featureData.map((item) => (
            <Col md={6} lg={4} key={item.id}>
              <Card className="feature-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                    <div >
                        <span className={` fs-1 ${item.icon}`} ></span>
                    </div>  
                      
                  <h4 className="feature-card-title mt-3">{item.title}</h4>
                  <p className="text-muted small mb-0">{item.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChoose;