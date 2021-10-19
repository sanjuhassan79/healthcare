import React from 'react';
import { Accordion, Col, Container, Image, Row } from 'react-bootstrap';
const Patient = () => {
    return (
        <div className="clinic-bd">
        <Container>
<Row>

<Col sm={6}>
    <div className="clinic__img">
    <Image src="https://www.healthcareitnews.com/sites/hitn/files/doctor-patient-712_1_0.jpg" rounded />
    </div>
</Col>
<Col sm={6}>
    <div className="clinic__text">
    <h2 className="mb-4">Patient <span className="title-color-sub">Information</span></h2>
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>
How do I make an appointment?</Accordion.Header>
    <Accordion.Body>
    If you would like to make an appointment with one of our practitioners, please contact our reception staff. Alternatively you may book your appointments online. Every effort will be made to accommodate your preferred time and choice of practitioner.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>
How do I get a copy of my records to another provider?</Accordion.Header>
    <Accordion.Body>
    “Normally, one would simply have to call the health care provider and request a copy of the record and pick them up, after signing a release for the records.” Some records that patients may want to request are test results, reports for surgeries, doctor's notes, discharge summaries and specialists' reports.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>
Is there a charge for copies of my medical record?</Accordion.Header>
    <Accordion.Body>
   have to call the health care provider and request a copy of the record and pick them up, after signing a release for the records.” Some records that patients may want to request are test results, reports for surgeries, doctor's notes, discharge summaries and specialists' reports.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>
How do I assure that my person I designate has access to my medical records?</Accordion.Header>
    <Accordion.Body>
     care provider and request a copy of the record and pick them up, after signing a release for the records.” Some records that patients may want to request are test results, reports for surgeries, doctor's notes, discharge summaries and specialists' reports.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        

    </div>
</Col>
</Row>

</Container>
    </div>
    );
};

export default Patient;