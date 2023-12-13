import React from 'react'
import NL1 from '../img/NewsletterImage/NL-1.png'
import '../css/NewsletterCss/NewsletterCard.css'

export default function NewsletterCard() {
  return (
    <div className='NLcard-container'>
        <div className='NLcard-wrapper'>
            <h1>NEWSLETTER</h1>
            <div className='NLcard-overlay'>
                <img src={NL1} />
                <button>Learn More</button>
            </div>
        </div>
         
    </div>
  )
}
