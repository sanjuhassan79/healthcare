import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Clinic.css'
const Clinic = () => {

    
    return (
        <div className="clinic-bd">
            <Container>
  <Row>
    <Col sm={6}>
        <div className="clinic__text">
            <h4>25 Years of Medical Excellence</h4>
            <h2>Welcome to <span className="title-color-sub">Our Clinic</span></h2>
            
            <p>We help your body restore itself by harnessing your own healing potential with a variety of techniques to combat areas of disease, injury or inflammation. This process involves a variety of techniques including a minimally invasive procedure conducted right in our clinic.</p>
            <p>We are a team of medical researchers and practitioners who work hard to provide effective treatments in our point-of-care facilities.</p>

            

        </div>
    </Col>
    <Col sm={6}>
        <div className="clinic__img">
        <Image src="https://www.portotheme.com/wordpress/medin/demo3/wp-content/uploads/2019/03/img-video-1.jpg" rounded />
        </div>
    </Col>
  </Row>
 
</Container>
        </div>
    );
};

export default Clinic;