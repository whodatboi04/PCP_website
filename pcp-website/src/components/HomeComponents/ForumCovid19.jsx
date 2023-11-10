import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "../css/HomeCss/ForumCovid19.css"

function ForumCovid19({ForumCovid}) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const mouseEnter = (e) => {
    e.target.classList.add("forum-btn-hover", "button")
  }
  const mouseLeave = (e) => {
    e.target.classList.remove("forum-btn-hover", "button")
  }

  return (
    <div className='forum-container'> 
        <h1>RECENT WEBINARS/HEALTH/<br/>
            FORUM FOR COVID-19 VACCINES
        </h1>
        <Carousel 
          activeIndex={index} 
          onSelect={handleSelect}
          className='forum-carousel'
          interval={4000}
        >
          {ForumCovid.map((ForumHealthCovid) => (
            <Carousel.Item className='forum-carousel-item'>
                <img 
                  src={ForumHealthCovid.image} 
                  text="First slide" 
                  alt='Health Forum for Covid-19'
                />
                <Carousel.Caption className='Carousel-cap'>
                  <a href={ForumHealthCovid.learnMore}>
                      <div 
                      className="forum-btn"
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
  );
}

export default ForumCovid19;