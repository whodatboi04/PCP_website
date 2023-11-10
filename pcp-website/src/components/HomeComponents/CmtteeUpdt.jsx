import React from 'react'
import advoImage from "../img/HomeImage/advocacy-icon.png"
import climateImage from "../img/HomeImage/climate-icon.png"
import ethicsImage from "../img/HomeImage/ethics-icon.png"
import "../css/HomeCss/CmtteeUpdt.css"

export default function CmtteeUpdt() {
  return (
    <div className='comttee-container'>
        <h1>COMMITTE UPDATES</h1>
        <div className='comttee-card-wrapper'>
            <div className='comttee-card-items'>
                <img src={advoImage} alt='Committe on Advocacy' />
                <h2>COMMITTEE ON ADVOCACY</h2>
                <a href='https://pcp.org.ph/index.php/committee-on-advocacy'>
                    <button>
                        Read More
                    </button>
                </a>
            </div>
            <div className='comttee-card-items'>
                <img src={climateImage} alt='Committe on Advocacy' />
                <h2>COMMITTEE ON ADVOCACY</h2>
                <a href='https://pcp.org.ph/index.php/committee-on-climate-change-and-environment'>
                    <button>
                        Read More
                    </button>
                </a>
            </div>
            <div className='comttee-card-items'>
                <img src={ethicsImage} alt='Committe on Advocacy' />
                <h2>COMMITTEE ON ADVOCACY</h2>
                <a href='https://pcp.org.ph/index.php/committee-on-ethics1'>
                    <button>
                        Read More
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}
