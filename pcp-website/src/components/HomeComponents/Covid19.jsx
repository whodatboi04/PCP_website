import React from 'react'
import GuidelinesIcon from "../img/HomeImage/Guidelines-icon.png"
import AlgorithmsIcon from "../img/HomeImage/Algorithm-icon.png"
import PositionIcon from "../img/HomeImage/Position-icon.png"
import "../css/HomeCss/Covid19.css"


function Covid19() {

  return (
    <>
      <div className='Covid-container'>
        <h1>COVID-19 UPDATES</h1>
          <div className='Covid-wrapper'>
              <div className='icon First-Card'>
                  <img 
                    src={GuidelinesIcon} 
                    alt='Interim Guidelines Icon' 
                  />
                  <h3>INTERIM GUIDELINES</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua.
                  </p>
                  <a href='#'>Read More</a>
              </div>
              <div className='icon Second-Card'>
                  <img 
                    src={AlgorithmsIcon} 
                    alt='Algorithms Icon' 
                  />
                  <h3>ALGORITHMS</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua.
                  </p>
                  <a href='#'>Read More</a>
              </div>
              <div className='icon Third-Card'>
                  <img 
                    src={PositionIcon} 
                    alt='Position Statements Icon' 
                  />
                  <h3>POSITION STATEMENTS</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua.
                  </p>
                  <a href='#'>Read More</a>
              </div>
          </div>
      </div>
    </>
  )
}

export default Covid19