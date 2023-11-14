import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/HomeCss/Banner.css";

function ControlledCarousel({ BannerSlides }) {
  const [index, setIndex] = useState(0);
  const mouseEnter = (e) => {
    e.target.classList.add("btn-hover", "button");
  };

  const mouseLeave = (e) => {
    e.target.classList.remove("btn-hover", "button");
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="Background-Banner">
      <div className="banner-wrapper">
        <div className="Summary-Text">
            <h1>
              Philippine <br></br>
              College <br></br>
              of <span>Physicians</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div className="Content-Background">
          <Carousel 
            activeIndex={index} 
            onSelect={handleSelect} 
            className="Carousel-Slider"
          >
            
            {BannerSlides.map((PosterSlide) => (
                <Carousel.Item 
                  interval={3000} 
                  key={PosterSlide.id}
                  className="banner-item"
                >
                  <img 
                    src={PosterSlide.image} 
                    alt="First slide" 
                    className="banner-img img1" 
                  />
                  <Carousel.Caption>
                  <a href={PosterSlide.learnMore}>
                      <div 
                        className="btn" 
                        onMouseEnter={mouseEnter} 
                        onMouseLeave={mouseLeave}
                      >
                          <button>
                            Learn More
                          </button>
                      </div>
                  </a>
                  </Carousel.Caption>
                </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ControlledCarousel;
