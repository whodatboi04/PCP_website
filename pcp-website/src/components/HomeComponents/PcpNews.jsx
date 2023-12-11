import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/HomeCss/PcpNews.css';

export default function NewsEvents({ SlidesPcpNews }) {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '1px',
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '1px',
        }
      }
    ]
  };

  return (
    <div className="pcpnews-container">
      <div className="pcpnews-wrapper">
        <h1>PCP Breaking News</h1>
        <Slider {...settings}>
          {SlidesPcpNews.map((newsSlide) => (
            <div className='card-pcp-news' key={newsSlide.id}>
              <div className='card-items-news'>
                    <h3>{newsSlide.title}</h3>
                    <a href={newsSlide.readMore}>
                      <button>
                        Read More
                      </button>
                    </a>
                </div>
              </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}