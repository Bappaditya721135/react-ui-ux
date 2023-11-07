import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// IMG 
import carosel1 from "../../assets/carousel1.jpg";
import carosel2 from "../../assets/carousel2.jpg";

export default function Services() {
  return (
    <div className="services">
        <Carousel
            autoPlay
            showStatus={false}
            showArrows={false}
            interval={1500}
            infiniteLoop
            showThumbs={false}
            >
            <div>
                <img src={carosel1} alt="carousel 1" />
            </div>
            <div>
                <img src={carosel2} alt="carousel 2" />
            </div>
        </Carousel>
    </div>
  )
}
