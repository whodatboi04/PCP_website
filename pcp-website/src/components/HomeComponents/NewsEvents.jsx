import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/HomeCss/NewsEvents.css';

export default function NewsEvents({ NewsSlides }) {
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
          slidesToScroll: 3,
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
    <div className="newsEvents-container">
      <div className="newsEvents-wrapper">
        <h1>Latest News & Events</h1>

        <Slider {...settings}>
          {NewsSlides.map((slides) => (
            <div className="card-items" key={slides.id}>
              <h3>{slides.title}</h3>
              <p className="date">{slides.date}</p>
              <p className="text-content">{slides.content}</p>
              <a href={slides.readMore} className="read-more">
                Read More
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
