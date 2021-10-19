import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
 import { Link } from 'react-router-dom';
 import logo from '../../assets/logo03.png'
import useAuth from '../../foodhooks/hooks/useAuth';
import './Navbars.css'
const Navbars = () => {
  const {user,logOut}=useAuth()
  return (
   
    <div>
    <Navbar sticky="top" collapseOnSelect expand="lg" className="top-nav py-3">
      <div className="container">
      <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="menu-list">
        <Nav >

          <Link className="navLink" to="/">Home</Link>
          <Link className="navLink" to="/contacts">Contacts</Link>
          <Link className="navLink" to="/">Home</Link>
          {user.email?
          <div>
            <span>{user.displayName}</span>
            <Link onClick={logOut} className="navLink" to="/"><span className="sinItem">Log out</span></Link>
            
          </div>
            :<div><Link className="navLink" to="/Login"><span className="sinItem">Login</span></Link>
            <Link className="navLink" to="/Register"><span className="sinItem">Register</span></Link></div>
          
          }

          
          
          
          
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
  </div>



  );
};

export default Navbars;