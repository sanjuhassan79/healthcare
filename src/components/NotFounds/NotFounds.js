import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFounds.css'
const NotFounds = () => {
    return (
        <div className="NotFounds">
             <Link className="navLink" to="/Home"><Button variant="outline-warning">Go to Home page</Button></Link>
             
  
        </div>
    );
};

export default NotFounds;