import React from 'react'
import BookImage from '../img/HomeImage/pcp-book.jpg';
import "../css/HomeCss/PcpBook.css";

export default function PcpBook() {

  return (
    <div className='pcp-book-container'>
      <div className='pcp-book-wrapper'>
        <div className='book'>
              <img 
              src={BookImage} 
              alt='The PCP Textbook of Internal Medicine'/>
          </div>
          <div className='book-content'>
              <h1>THE PCP TEXTBOOK OF<br/>
                  <span>INTERNAL MEDICINE</span>
              </h1>
              <a href='https://pay.pcp.org.ph/pcp-textbook-pay'>
                <button>
                  Click Here!
                </button>
              </a>
          </div>
      </div>
    </div>
  )
}

