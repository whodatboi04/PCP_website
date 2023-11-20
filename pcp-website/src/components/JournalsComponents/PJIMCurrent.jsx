import React from 'react'
import JournalBanner from '../img/JournalsImage/internal-med.jpg'
import '../css/JournalsCss/PJIMCurrent.css'

export default function PJIMCurrent({props}) {
  return (
    <div className='current-container'>
        <div className='current-wrapper'>
            <div className='journal-banner-container'>
                <div className='journal-banner-wrapper'>
                    <h1>P.J.I.M - CURRENT ISSUE</h1>
                    <h3>Phi. Journal of Internal Medicine (Vol. 61 No. 3)</h3>
                    <div className='journal-banner'>
                        <div className='banner-bg'>
                        </div>
                        <img src={JournalBanner} alt='Philippine Journal of Internal medicine' />
                    </div>
                </div>
            </div>
            <div className='journal-content-container'>
                <div className='journal-content-wrapper'>
                    <h2>CONTENTS</h2>
                    {props.map((journals) => (
                        <div className='journal-content' key={journals.id}>
                            <h3>{journals.title}</h3>
                            <h4>{journals.contentTitle}</h4>
                            <p>{journals.paragraph}</p>
                            <a href={journals.viewLink}>
                                View
                            </a>
                        </div>
                    ))}
                </div>
            </div>
                
            
        </div>
    </div>
  )
}
