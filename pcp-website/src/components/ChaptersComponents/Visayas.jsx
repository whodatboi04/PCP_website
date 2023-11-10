import React from 'react'

export default function Visayas() {
  return (
    <div className='visayas-content'>
            <h2>SOUTH <span>LUZON REGION</span></h2>
            <div className='visayas-btn'>
                <Link
                    to="/Chapters/Bohol"
                    className='visayas-btn-items'
                >
                    BICOL CHAPTER
                </Link>
                <Link
                    to="/Chapters/Capiz-Aklan"
                    className='visayas-btn-items'
                >
                    RIZAL CHAPTER
                </Link>
                <Link
                    to="/Chapters/Central-Visayas"
                    className='visayas-btn-items'
                >
                    SOUTHERN LUZON CHAPTER
                </Link>
                <Link
                    to="/Chapters/Eastern-Visayas"
                    className='visayas-btn-items'
                >
                    SOUTHERN LUZON CHAPTER
                </Link>
                <Link
                    to="/Chapters/Negros-occidental"
                    className='visayas-btn-items'
                >
                    SOUTHERN LUZON CHAPTER
                </Link>
                <Link
                    to="/Chapters/Western-visayas-panay"
                    className='visayas-btn-items'
                >
                    SOUTHERN LUZON CHAPTER
                </Link>
                <Link
                    to="/Chapters/Negros-Oriental"
                    className='visayas-btn-items'
                >
                    SOUTHERN LUZON CHAPTER
                </Link>
            </div>
        </div>
  )
}
