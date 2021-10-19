import React from 'react';
import { Button } from 'react-bootstrap';
import './Appointments.css'
const Appointments = () => {
    return (
        <div className="appointments">
           <div className="clinic__text cltext">
            
            <h2>Online<span className="title-color-sub">Appointments </span>And Prescriptions</h2>
            
            <h4>You can now book a limited amount of doctors’ appointments online</h4>
            <Button variant="outline-warning mt-5">Doctor Timetable</Button>
        </div>
        </div>
    );
};

export default Appointments;