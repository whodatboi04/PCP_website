import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import "../css/HomeCss/NewsEvents.css";

function NewsEvents({ NewsSlides }) {
  const [index, setIndex] = useState(0);
  const [numVisibleItems, setNumVisibleItems] = useState(3);
  const [sizeCarousel, setSizeCarousel] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Next and Previous Icon
  const customPrevIcon = <span className='carousel-btn prev'><GrPrevious /></span>;
  const customNextIcon = <span className='carousel-btn next'><GrNext /></span>;

  useEffect(() => {
    const updateNumVisibleItems = () => {
      if (window.innerWidth < 768) {
        setNumVisibleItems(1);
        setSizeCarousel(true);
      } else {
        setNumVisibleItems(3);
        setSizeCarousel(false);
      }
    };

    window.addEventListener('resize', updateNumVisibleItems);

    // Call it initially to set the initial number of visible items
    updateNumVisibleItems();

    return () => {
      window.removeEventListener('resize', updateNumVisibleItems);
    };
  }, []);

  return (
    <div className='container-content'>
      <h1>Latest News & Events</h1>
      <Carousel
        className={sizeCarousel ? 'mobile-news-events-slide' : 'newsEvents-carousel-slides'}
        activeIndex={index}
        onSelect={handleSelect}
        prevIcon={customPrevIcon}
        nextIcon={customNextIcon}
        interval={null}
        controls={window.innerWidth >= 768}
      >
        {NewsSlides.map((slides) => (
          <Carousel.Item className='carousel-item' key={slides.id}>
            <div className='card-news-events'>
              {[...Array(numVisibleItems)].map((_, i) => (
                <div className='card-items' key={i}>
                  <h3>{slides[`title${i + 1}`]}</h3>
                  <p className='date'>{slides[`date${i + 1}`]}</p>
                  <p className='text-content'>{slides[`content${i + 1}`]}</p>
                  <a href={slides[`readMore${i + 1}`]} className='read-more'>
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default NewsEvents;
