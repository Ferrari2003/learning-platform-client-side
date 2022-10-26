import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../photo/brand1.webp';
import brand2 from '../../../photo/brand2.png';
import brand3 from '../../../photo/brand3.png'




const Footer = () => {
    return (
        <div className='container mt-6'>
            <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={brand1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-full"
            src={brand2}  alt="Second slide"
          />
  
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={brand3}
            alt="Third slide"
          />
  
          
        </Carousel.Item>
      </Carousel>
        </div>
    );
};

export default Footer;
