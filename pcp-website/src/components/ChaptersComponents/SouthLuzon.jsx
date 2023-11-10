import React from 'react'
import { Link } from 'react-router-dom'
import "../css/ChapterCss/SouthLuzon.css"

export default function SouthLuzon() {
  return (
    <div className='SouthLuzon-content'>
            <h2>SOUTH <span>LUZON REGION</span></h2>
            <div className='SouthLuzon-btn'>
                <Link
                    to="/Chapters/Bicol"
                    className='SouthLuzon-btn-items'
                >
                    BICOL CHAPTER
                </Link>
                <Link
                    to="/Chapters/Rizal"
                    className='SouthLuzon-btn-items'
                >
                    RIZAL CHAPTER
                </Link>
                <Link
                    to="/Chapters/Southern-Luzon"
                    className='SouthLuzon-btn-items'
                >
                    SOUTHERN LUZON CHAPTER
                </Link>
            </div>
        </div>
  )
}
