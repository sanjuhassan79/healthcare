import React from 'react';
import {Carousel,Button} from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div className="bann-item">
            <Carousel fade className="sliderItem">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://4scarehospital.com/wp-content/uploads/2021/02/general-surgery-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="slider">
        <h3 className="home-sub-title">Look fresh!</h3>
      <h1 className="home-main-title">Skin Surgery Artistry</h1>
      <p className="home-para">Let us help you look your best!</p>
      <Button className="home-button" variant="outline-warning">Warning</Button>
    </Carousel.Caption>
  </Carousel.Item>
  
 
  </Carousel>
    
        </div>
    );
};

export default Banner;