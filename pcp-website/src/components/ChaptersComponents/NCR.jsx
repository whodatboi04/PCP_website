import React from 'react'
import '../css/ChapterCss/NCR.css'
import { Link } from 'react-router-dom';

export default function NCR() {
  return (
    <div className='ncr-container'>
        <h1>NATIONAL <span>CAPITAL REGION</span></h1>
        <div className='ncr-wrapper'>
            <div className='ncr-items'>
                <div className='ncr ncr-first-items'>
                    <Link 
                        to="/Chapters/Camanava"
                        className='ncr-btn-items'
                    >
                        CAMANAVA CHAPTER
                    </Link>
                    <Link
                        to="/Chapters/Marikina"
                        className='ncr-btn-items'
                    >
                        MARIKINA CHAPTER
                    </Link>
                    <Link
                        to="/Chapters/Manila"
                        className='ncr-btn-items'
                    >
                        MANILA CHAPTER
                    </Link>
                </div>
                <div className='ncr ncr-second-items'>
                    <Link
                        to="/Chapters/Matapat"
                        className='ncr-btn-items'
                    >
                        MATAPAT CHAPTER
                    </Link>
                    <Link 
                        to="/Chapters/Pasjman"
                        className='ncr-btn-items'
                    >
                        PASJMAN CHAPTER
                    </Link>
                    <Link
                        to="/Chapters/Pasay"
                        className='ncr-btn-items'
                    > 
                        PASAY CHAPTER
                    </Link>
                </div>
                <div className='ncr ncr-third-items'>
                    <Link
                        to="/Chapters/Pamunlas"
                        className='ncr-btn-items'
                    >
                        PAMUNLAS CHAPTER
                    </Link>
                    <Link
                        to="/Chapters/Quezon-City"
                        className='ncr-btn-items'
                    >
                        QUEZON CITY CHAPTER
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
