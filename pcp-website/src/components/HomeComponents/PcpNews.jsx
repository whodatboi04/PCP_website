import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import {GrNext} from 'react-icons/gr';
import {GrPrevious} from 'react-icons/gr';
import "../css/HomeCss/PcpNews.css";

function PcpNews({SlidesPcpNews}) {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    //Next and Previous Icon
    const customPrevIcon = <span className='pcp-news-carousel-btn prev'><GrPrevious/></span>;
    const customNextIcon = <span className='pcp-news-carousel-btn next'><GrNext/></span>;

  return (
      <div className='pcp-news-container'>
        <div className='pcp-news-wrapper'>
          <h1>PCP BREAKING NEWS</h1> 
          <p>I.M Inspiring Dynamic Leadership</p>
          
            <Carousel 
              className='carousel-slides'
              activeIndex={index}
              onSelect={handleSelect}
              prevIcon={customPrevIcon}
              nextIcon={customNextIcon}   
              interval={null}
            >
              {SlidesPcpNews.map((newsSlide) => (
                <Carousel.Item className='carousel-item-news' key={newsSlide.id}> 
                        <div className='card-pcp-news'>
                            <div className='card-items-news'>
                                <h3>{newsSlide.title}</h3>
                                <a href={newsSlide.readMore}>
                                  <button>
                                    Read More
                                  </button>
                                </a>
                            </div>
                            <div className='card-items-news'>
                              <h3>{newsSlide.title2}</h3>
                                <a href={newsSlide.readMore2}>
                                  <button>
                                    Read More
                                  </button>
                                </a>
                            </div>
                            <div className='card-items-news'>
                              <h3>{newsSlide.title3}</h3>
                                <a href={newsSlide.readMore3}>
                                  <button >
                                    Read More
                                  </button>
                                </a>
                            </div>
                        </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
      </div>
  )
}

export default PcpNews