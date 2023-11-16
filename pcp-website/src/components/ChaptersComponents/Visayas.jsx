import React from 'react'
import { Link } from 'react-router-dom';  
import '../css/ChapterCss/Visayas.css'  

export default function Visayas() {
  return (
    <div className='visayas-content'>
            <h2>VISAYAS <span>REGION</span></h2>
            <div className='visayas-btn'>
                <Link
                    to="/Chapters/Bohol"
                    className='visayas-btn-items'
                >
                    BOHOL CHAPTER
                </Link>
                <Link
                    to="/Chapters/Capiz-Aklan"
                    className='visayas-btn-items'
                >
                    CAPIZ-AKLAN CHAPTER
                </Link>
                <Link
                    to="/Chapters/Central-Visayas"
                    className='visayas-btn-items'
                >
                    CENTRAL VISAYAS CHAPTER
                </Link>
                <Link
                    to="/Chapters/Eastern-Visayas"
                    className='visayas-btn-items'
                >
                    EASTERN VISAYAS CHAPTER
                </Link>
                <Link
                    to="/Chapters/Negros-occidental"
                    className='visayas-btn-items'
                >
                    NEGROS OCCIDENTAL CHAPTER
                </Link>
                <Link
                    to="/Chapters/Western-visayas-panay"
                    className='visayas-btn-items'
                >
                    WESTERN VISAYAS-PANAY CHAPTER
                </Link>
                <Link
                    to="/Chapters/Negros-Oriental"
                    className='visayas-btn-items'
                >
                    NEGROS ORIENTAL CHAPTER
                </Link>
            </div>
        </div>
  )
}
