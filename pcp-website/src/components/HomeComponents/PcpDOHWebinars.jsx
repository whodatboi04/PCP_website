import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import {GrNext} from 'react-icons/gr';
import {GrPrevious} from 'react-icons/gr';
import "../css/HomeCss/PcpDOHWebinars.css";

function PcpDOHWebinars({DOHWebinars}) {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    //Next and Previous Icon
    const customPrevIcon = <span className='carousel-btn pcp-doh-prev'><GrPrevious/></span>;
    const customNextIcon = <span className='carousel-btn pcp-doh-next'><GrNext/></span>;

  return (
      <div className='pcp-doh-container'>
          <h1>PCP-DOH WEBINARS SERIES</h1> 
          
          <Carousel 
            className='pcp-doh-carousel-slides'
            activeIndex={index}
            onSelect={handleSelect}
            prevIcon={customPrevIcon}
            nextIcon={customNextIcon}   
            interval={null}
          >
            {DOHWebinars.map((DOHwebinar) => (
              <Carousel.Item 
                className='pcp-dohcarousel-item-news'
                key={DOHwebinar.id}
              > 
                      <div className='pcp-doh-card-pcp-news'>
                          <div className='pcp-doh-card-items-news'>
                              <h3>{DOHwebinar.title}</h3>
                              <a href={DOHwebinar.readMore}>
                                <button>
                                  Read More
                                </button>
                              </a>
                          </div>
                          <div className='pcp-doh-card-items-news'>
                            <h3>{DOHwebinar.title2}</h3>
                              <a href={DOHwebinar.readMore2}>
                                <button>
                                  Read More
                                </button>
                              </a>
                          </div>
                          <div className='pcp-doh-card-items-news'>
                            <h3>{DOHwebinar.title3}</h3>
                              <a href={DOHwebinar.readMore3}>
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
  )
}

export default PcpDOHWebinars