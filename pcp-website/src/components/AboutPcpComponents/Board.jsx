import React from 'react'
import '../css/AboutCss/Board.css'

export default function Board({boards}) {
  return (
    <div className='board-wrapper'>
      {/* Map to connect json */}
      {boards.map((boardRegents) => (
        <div className='board-container' key={boardRegents.id}>
            <div className='board-logo'>
                <div className='board-square'></div>
                <div className='board-circle'>
                  <h1>OFFICER AND <br/>BOARD OF REGENTS <br/>FY <span>{boardRegents.year}</span></h1>
                </div>
            </div>
            <img src={boardRegents.image} alt='PCP Board of Regents 2023-2024' />
        </div>
      ))}
    </div>
  )
}
