import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = (props) => {

    const {title,description,image,id}=props.Service

    return (
        <div>
             <Col className="shadowss">
      <Card style={{height:"450px"}}>
        <Card.Img style={{height:"230px"}}variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}
          </Card.Text>
          
        <Link  to={`/Details/${id} `}><Button className="mb-4" variant="outline-warning"> Our Service Visit Here</Button></Link>

        </Card.Body>


      </Card>
    </Col>
        </div>
    );
};

export default Services;