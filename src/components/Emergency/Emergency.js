import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import'./Emergency.css'
const Emergency = () => {
    return (
        <div className="bg-white">
            <Container className="my-5 ">
  
  <Row>
    <Col sm>

        <div className="Emergency">
            <div className="Emergency__itrm"><i className="fas fa-hospital-alt"></i></div>
            <div className="Emergency__text">
                <h3>24 Hour Emergency</h3>
                <p>Open round the clock for convenience, quick and easy access</p>
            </div>
        </div>



    </Col>
    <Col sm>
        <div className="Emergency">
            <div className="Emergency__itrm"><i className="fas fa-vials"></i></div>
            <div className="Emergency__text">
                <h3>Complete Lab Services</h3>
                <p>Cost-efficient, comprehensive and clinical laboratory services</p>
            </div>
        </div></Col>
    <Col sm>
        <div className="Emergency">
            <div className="Emergency__itrm"><i className="fas fa-user-tie"></i></div>
            <div className="Emergency__text">
                <h3>Medical Professionals</h3>
                <p>Qualified and certified physicians for quality medical care</p>
            </div>
        </div></Col>
  </Row>
</Container>
        </div>
    );
};

export default Emergency;