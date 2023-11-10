import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import {GrNext} from 'react-icons/gr';
import {GrPrevious} from 'react-icons/gr';
import "../css/HomeCss/NewsEvents.css";


function NewsEvents({NewsSlides}) {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // Next and Prevoius Icon 
    const customPrevIcon = <span className='carousel-btn prev'><GrPrevious/></span>;
    const customNextIcon = <span className='carousel-btn next'><GrNext/></span>;

    return (
        <div className='container-content'>
            <h1>Latest News & Events</h1>
            <Carousel 
                className='carousel-slides'
                activeIndex={index}
                onSelect={handleSelect}
                prevIcon={customPrevIcon} // Use the custom previous icon
                nextIcon={customNextIcon} // Use the custom next icon   
                interval={null}
            >
                {NewsSlides.map((slides) => (
                    <Carousel.Item className='carousel-item' key={slides.id} > 
                            <div className='card-news-events'>
                                <div className='card-items'>
                                    <h3>{slides.title}</h3>
                                    <p className='date'>{slides.date}</p>
                                    <p className='text-content'>
                                    {slides.content}
                                    </p>
                                    <a 
                                        href={slides.readMore} 
                                        className='read-more'>
                                            Read More
                                    </a>
                                </div>
                                <div className='card-items'>
                                    <h3>{slides.title2}</h3>
                                    <p className='date'>{slides.date2}</p>
                                    <p className='text-content'>
                                    {slides.content2}
                                    </p>
                                    <a  
                                        href={slides.readMore2} 
                                        className='read-more'>
                                            Read More
                                    </a>
                                </div>
                                <div className='card-items'>
                                    <h3>{slides.title3}</h3>
                                    <p className='date'>{slides.date3}</p>
                                    <p className='text-content'>
                                    {slides.content3}
                                    </p>
                                    <a  
                                        href={slides.readMore3} 
                                        className='read-more'>
                                            Read More
                                    </a>
                                </div>
                            </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default NewsEvents;