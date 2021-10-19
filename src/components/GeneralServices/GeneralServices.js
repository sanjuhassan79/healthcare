import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useGeneralServices from '../../foodhooks/hooks/General';
import Services from './Services';
import './GeneralServices.css'
const GeneralServices = () => {

   const [Service]=useGeneralServices()
  console.log(Service);
    return (
        <div>
            <Container className="my-5 text-center">
            <h2 className="services__title">General <span className="title-color-sub">Services</span> </h2>
            <Row xs={1} md={3} className="g-4">

                {
                  Service.map(Service=>
                    <Services
                    key={Service.id}
                    Service={Service}
                    
                    ></Services>
                    
                    )  
                }
  
            </Row>
            </Container>
        </div>
    );
};

export default GeneralServices;