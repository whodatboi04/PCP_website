import React from 'react'
import "../css/ChapterCss/Provincial.css"
import SouthLuzon from './SouthLuzon'
import Visayas from './Visayas'
import Mindanao from './Mindanao'


export default function Provincial() {
  return (
    <div className='provincial-container'>
        <h1>PROVINCIAL <span>CHAPTER</span></h1>
        <SouthLuzon/>
        <Visayas />
        <Mindanao />
    </div>
  )
}
