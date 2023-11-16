import React from 'react'
import { Link } from 'react-router-dom'
import '../css/ChapterCss/Mindanao.css'

export default function Mindanao() {
  return (
    <div className='mindanao-content'>
            <h2>MINDANAO <span>REGION</span></h2>
            <div className='mindanao-btn'>
                <Link
                    to="/Chapters/Bohol"
                    className='mindanao-btn-items'
                >
                    NORTHERN  MINDANAO CHAPTER
                </Link>
                <Link
                    to="/Chapters/Capiz-Aklan"
                    className='mindanao-btn-items'
                >
                    NORTHWESTERN MINDANAO CHAPTER 
                </Link>
                <Link
                    to="/Chapters/Central-Visayas"
                    className='mindanao-btn-items'
                >
                    SOCSKSARGEN CHAPTER
                </Link>
                <Link
                    to="/Chapters/Eastern-Visayas"
                    className='mindanao-btn-items'
                >
                    SOUTHERN MINDANAO CHAPTER
                </Link>
                <Link
                    to="/Chapters/Negros-occidental"
                    className='mindanao-btn-items'
                >
                    WESTERN MINDANAO CHAPTER
                </Link>
                <Link
                    to="/Chapters/Western-visayas-panay"
                    className='mindanao-btn-items'
                >
                    CARAGA CHAPTER
                </Link>
            </div>
        </div>
  )
}
