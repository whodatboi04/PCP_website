import React from 'react'
import "../css/ChapterCss/Provincial.css"
import SouthLuzon from './SouthLuzon'


export default function Provincial() {
  return (
    <div className='provincial-container'>
        <h1>PROVINCIAL <span>CHAPTER</span></h1>
        <div className='provincial-content'>
            <SouthLuzon/>
        </div>
    </div>
  )
}
