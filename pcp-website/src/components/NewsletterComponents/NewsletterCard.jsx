import React, { useState, useEffect } from 'react';
import '../css/NewsletterCss/NewsletterCard.css';
import { newsLetterCardData } from '../../data/NewsletterData/NewsletterCard';

export default function NewsletterCard() {
  const [mouseEnter, setMouseEnter] = useState(Array(newsLetterCardData.length).fill(false));

  const handleMouseEnter = (index) => {
    const updatedMouseEnter = [...mouseEnter];
    updatedMouseEnter[index] = true;
    setMouseEnter(updatedMouseEnter);
  };

  const handleMouseLeave = (index) => {
    const updatedMouseEnter = [...mouseEnter];
    updatedMouseEnter[index] = false;
    setMouseEnter(updatedMouseEnter);
  };

  useEffect(() => {
    const overlays = document.querySelectorAll('.NLcard-overlay');

    overlays.forEach((overlay, index) => {
      overlay.addEventListener('mouseenter', () => handleMouseEnter(index));
      overlay.addEventListener('mouseleave', () => handleMouseLeave(index));
    });

    return () => {
      overlays.forEach((overlay, index) => {
        overlay.removeEventListener('mouseenter', () => handleMouseEnter(index));
        overlay.removeEventListener('mouseleave', () => handleMouseLeave(index));
      });
    };
  }, [mouseEnter]);

  return (
    <div className='NLcard-container'>
      <div className='NLcard-wrapper'>
        <h1>NEWSLETTER</h1>
        <div className='NLcard-items'>
          {newsLetterCardData.map((item, index) => (
            <div key={item.id} className={mouseEnter[index] ? 'NLcard-overlay active' : 'NLcard-overlay'}>
              <img src={item.image} alt={`Newsletter ${index + 1}`} />
              <button>Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
