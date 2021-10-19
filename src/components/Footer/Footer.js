import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, FormControl, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo03.png';
import './Footer.css'
const Footer = () => {
    return (
        <div className="top-nav footer">
        <Container>
  
  <Row>
    <Col sm>

        <div className="">
            <Link to="/"><Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand></Link> <br /><br /><br />

            <p className="fw-light text-muted my-3">To receive email releases, simply provide us<br />
                with your email address below.</p>
                <Form className="d-flex w-75 text-center my-2">
                <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                />
                <Button className="footer-button">Danger</Button>
                </Form>

                <div className="icon">
                    <Link to="/"><i className="fab fa-facebook-f footer-icon mx-2"></i></Link>
                    <Link to="/"><i className="fab fa-twitter footer-icon mx-3"></i></Link>
                    <Link to="/"><i className="fab fa-github footer-icon mx-2"></i></Link>
                    <Link to="/"><i className="fab fa-linkedin-in footer-icon mx-2"></i></Link>
                </div>
        </div>







    </Col>
    <Col sm>
        
<div className="">
    <h2 className="pb-3">Blog Posts</h2>
    <div className="footer__post">
        <div className="footer-img">
            <img src="https://www.portotheme.com/wordpress/medin/demo3/wp-content/uploads/2019/01/footer-post01.png" alt="" />
        </div>
        <div>
        <h5>Medications & Oral Health</h5>
        <p className="fw-light text-muted my-3">January 29, 2021</p>
        </div>
    </div>
    <div className="footer__post">
        <div className="footer-img">
            <img src="https://www.portotheme.com/wordpress/medin/demo3/wp-content/uploads/2019/01/footer-post03.png" alt="" />
        </div>
        <div>
        <h5>Smile For Your Health!</h5>
        <p className="fw-light text-muted my-3">January 29, 2021</p>
        </div>
    </div>
    <div className="footer__post">
        <div className="footer-img">
            <img src="https://www.portotheme.com/wordpress/medin/demo3/wp-content/uploads/2019/01/footer-post02.png" alt="" />
        </div>
        <div>
        <h5>Tooth Fairy Traditions</h5>
        <p className="fw-light text-muted my-3">January 29, 2021</p>
        </div>
    </div>
</div>


    </Col>
    <Col sm>

       
    <div className="">
    <h2 className="pb-3">Our Contacts</h2>
    <div className="footer__post">
        <div className="footer-img">
        <Link to="/"><i className="fas fa-map-marker-alt footer-icon mx-2"></i></Link>
        </div>
        <div>
       
        <p className="fw-light text-muted">1560 Holden Street San Diego, CA 92139</p>
        </div>
    </div>
    <div className="footer__post my-3">
        <div className="footer-img">
        <Link to="/"><i className="fas fa-phone footer-icon mx-2"></i></Link>
        </div>
        <div>
       
        <p className="fw-light text-muted">1-800-267-0000, 1-800-267-0001</p>
        </div>
    </div>
    <div className="footer__post">
        <div className="footer-img">
        <Link to="/"><i className="fas fa-envelope footer-icon mx-2"></i></Link>
        </div>
        <div>
       
        <p className="fw-light text-muted">sanjuhassan560@gmail.com</p>
        </div>
    </div>

</div>


    </Col>
  </Row>
</Container>
</div>
    );
};

export default Footer;