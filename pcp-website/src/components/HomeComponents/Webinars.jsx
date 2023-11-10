import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../css/HomeCss/Webinar.css";


export default function Webinars({webinarSlides}) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='webinar-containers'>
        <h1>
          PCP WEBINARS
        </h1>
        <Carousel 
            activeIndex={index} 
            onSelect={handleSelect}
            className='Carousel-webinar'
        >
        {webinarSlides.map((webinarPoster) => ( 
          <Carousel.Item 
              interval={3000} 
              key={webinarPoster.id}
          >
              <img 
                src={webinarPoster.image} 
                text="First slide" 
                alt='Philippine College of Physicians' 
              />
          </Carousel.Item>
        ))}
        </Carousel>
    </div>
  );
}
