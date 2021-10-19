import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contacts.css'
const Contacts = () => {
    return (
        <div>
            <div className="contacts__map">
                
            </div>
            <div>

            <Container className="my-5">
  
  <Row>
  <Col sm>
  <div className="clinic__text">
            <h4>25 Years of Medical Excellence</h4>
            <h2>Welcome to <span className="title-color-sub">Our Clinic</span></h2>
            <p>We help your body restore itself by harnessing your own healing potential with a variety of techniques to combat areas of disease, injury or inflammation. This process involves a variety of techniques including a minimally invasive procedure conducted right in our clinic.</p>
            <p>We are a team of medical researchers and practitioners who work hard to provide effective treatments in our point-of-care facilities.</p>

            

        </div>
    </Col>
    <Col sm>
    <form id="contact-form" className="contact-form">



<div className="controls">

  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="form_name">Firstname *</label>
        <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/>
        <div className="help-block with-errors"></div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="form_lastname">Lastname *</label>
        <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/>
        <div className="help-block with-errors"></div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="form_email">Email *</label>
        <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
        <div className="help-block with-errors"></div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="form_phone">Phone</label>
        <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your phone"/>
        <div className="help-block with-errors"></div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12">
      <div className="form-group">
        <label htmlFor="form_message">Message *</label>
        <textarea id="form_message" name="message" className="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please,leave us a message."></textarea>
        <div className="help-block with-errors"></div>
      </div>
    </div>
    <div className="col-md-12">
      <input type="submit" className="btn btn-warning btn-send mt-3" value="Send message"/>
    </div>
  </div>
  
</div>

</form>
    </Col>
    
  </Row>
</Container>

            </div>


        </div>

    );
};

export default Contacts;