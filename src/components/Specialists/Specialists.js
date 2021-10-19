import React from 'react';
import { Col, Container, Image, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Specialists.css'
import GeneralServices from '../GeneralServices/GeneralServices';
const Specialists = () => {
    return (
        <div className="Specialists">
           <Container>
  <Row>
    <Col sm={4}><Image src="https://www.portotheme.com/wordpress/medin/demo3/wp-content/uploads/2019/01/doctor-page-photo.jpg" thumbnail />
    
    <div>
    <Table striped bordered hover className="my-5">
  <thead>
    
  </thead>
  <tbody>
    <tr>
      
      <td>Speciality</td>
      <td>Dentist</td>
    </tr>
    <tr>
      
      <td>Degrees</td>
      <td>Degrees</td>
    </tr>
    <tr>
      
      <td>Areas of Expertise</td>
      <td>Gygienology <br />Immunology <br />Internal Medicine</td>
    </tr>
    <tr>
      
      <td>Office</td>
      <td>12 General Office</td>
    </tr>
    <tr>
      
      <td>Gender</td>
      <td>	Male</td>
    </tr>
   
  </tbody>
</Table>
    </div>
    
    
    
    </Col>



    <Col sm={8}>
        
                <div className="Specialists__name">
                    <div>
                        <h3 className="Specialists__title">Dr. Frank Bigham</h3>
                        <p className="Specialists__subtitle">Associate Dentist</p>

                    </div>
                    <div>
                    <div className="footer__post">
                    <div className="footer-img">
                    <Link to="/"><i className="fas fa-phone  footer-icon mx-2"></i></Link>
                    </div>
                    <div>
                
                    <p className="fw-light text-muted mt-1">1-262-374-3970</p>
                    </div>
                    <div className="footer-img">
                    <Link to="/"><i className="fab fa-facebook-f footer-icon mx-2"></i></Link>
                    </div>
                    <div className="footer-img">
                    <Link to="/"><i className="fas fa-envelope footer-icon mx-2"></i></Link>
                    </div>
                </div>
            </div>
            
            </div>

            <div className="clinic__text">
            
            
            <p>Dr. Frank Bigham received his Doctorate in Medical Dentistry from Hospital, USA in 2003. Following his professional qualification, he practiced maxillofacial surgery at Hospital and the Royal Hospital. Dr. Bigham gained membership of the College of Surgeons of USA in 2007. He has over 10 years of experience working as a general dental practitioner in both Surrey and central. Dr. Bigham enjoys all aspects of his field especially cosmetic dentistry and prosthetics. Passionate in learning languages, he is fluent in both English and Arabic, and also speaks French and some Italian. His interests include sports and history.</p>
            <p>When asked what makes dentistry so rewarding, he said “My job is rewarding because sometimes even the simplest treatment can change the patient`s confidence in himself/herself and I feel that I am part of a larger global healthcare promotion program.”</p>

            

        </div>


        <div className="footer__post my-3">
        <div className="footer-img">
        <Link to="/"><i className="fas fa-arrow-right footer-icon mx-2"></i></Link>
        </div>
        <div>
       
        <p className="fw-light text-muted">Member of the Royal College of Surgeons of USA</p>
        </div>
    </div>
        <div className="footer__post my-3">
        <div className="footer-img">
        <Link to="/"><i className="fas fa-arrow-right footer-icon mx-2"></i></Link>
        </div>
        <div>
       
        <p className="fw-light text-muted">Member of the General Dental Council (USA)</p>
        </div>
    </div>

    <div className="clinic__text text">
            <h2>Dental Treatments of <span className="title-color-sub">Dr. Bigham </span></h2>
            
        </div>


        <div>
        <Container>
  
  <Row className="my-5">
    <Col sm> <Image src="https://www.portotheme.com/wordpress/medin/demo3/wp-content/uploads/2019/01/doctor-page-portfolio-1.jpg" rounded /></Col>
    <Col sm className="dental_item"><Image src="https://www.portotheme.com/wordpress/medin/demo3/wp-content/uploads/2019/01/doctor-page-portfolio-2.jpg" rounded /></Col>
    <Col sm><Image src="https://www.portotheme.com/wordpress/medin/demo3/wp-content/uploads/2019/01/doctor-page-portfolio-3.jpg" rounded /></Col>
  </Row>
</Container>
        </div>
        
    </Col>
  </Row>
  
</Container>

<GeneralServices></GeneralServices>
        </div>
    );
};

export default Specialists;