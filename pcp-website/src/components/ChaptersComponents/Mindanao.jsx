import React from 'react'
import { Link } from 'react-router-dom'
import '../css/ChapterCss/Mindanao.css'

export default function Mindanao() {
  return (
    <div className='mindanao-content'>
            <h2>MINDANAO <span>REGION</span></h2>
            <div className='mindanao-btn'>
                <Link
                    to="/Chapters/North-Mindanao"
                    className='mindanao-btn-items'
                >
                    NORTHERN  MINDANAO CHAPTER
                </Link>
                <Link
                    to="/Chapters/North-West-Mindanao"
                    className='mindanao-btn-items'
                >
                    NORTHWESTERN MINDANAO CHAPTER 
                </Link>
                <Link
                    to="/Chapters/Socsksargen"
                    className='mindanao-btn-items'
                >
                    SOCSKSARGEN CHAPTER
                </Link>
                <Link
                    to="/Chapters/Southern-Mindanao"
                    className='mindanao-btn-items'
                >
                    SOUTHERN MINDANAO CHAPTER
                </Link>
                <Link
                    to="/Chapters/Western-Mindanao"
                    className='mindanao-btn-items'
                >
                    WESTERN MINDANAO CHAPTER
                </Link>
                <Link
                    to="/Chapters/Caraga"
                    className='mindanao-btn-items'
                >
                    CARAGA CHAPTER
                </Link>
            </div>
        </div>
  )
}
