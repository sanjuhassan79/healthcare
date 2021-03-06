import React from 'react';
import { useEffect,useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
 import Appointments from '../Appointments/Appointments.js';
import './Details.css'

const Details = () => {
    const {DetailsId}=useParams()
    const [Service,setService]=useState([])
    // console.log(Service);
// console.log(Service);
    useEffect(() => {
        fetch('/GeneralServices.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    }, []);
    const product = Service.filter((pd) => pd.id == DetailsId);
    const Services=product[0]
console.log(Services);

    return (
        <div>
           
            <Container className="shadow mytom p-5 mb-5">
  <Row>
  <Col sm={6}>
        <div className="clinic__img">
        <Image src={Services?.image} thumbnail   />
        </div>
    </Col>
    <Col sm={6}>
        <div className="clinic__text">
            
            <h2>Welcome to <span className="title-color-sub">{Services?.title}</span></h2>
            
            <p>{Services?.description}</p>
            <button type="button" class="btn btn-outline-warning"> Booking here</button>

            

        </div>
    </Col>
    
  </Row>
 
</Container>
            <Appointments></Appointments>
        </div>

        
    );
};

export default Details;