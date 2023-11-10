import React from 'react'
import AmendedConsImg from '../img/AboutPcpImage/2021-constitution.png'
import TrainInstitutionImg from '../img/AboutPcpImage/training-institution.png'
import '../css/AboutCss/Constitution.css'

export default function Constitution() {
  return (
    <div className='cons-container'>
        <div className='consti-wrapper'>
            <img src={AmendedConsImg} alt='2021 PCP Amended Constitution By-Laws' />
            <div className='consti-content'>
                <h2>
                    2021 PCP Amended <br/>
                    Constitution By-Laws
                </h2>
                <a href='https://drive.google.com/file/d/1cWNOvkKsWPQz2jy39EUexNi7Qtv4z1Ph/view'>
                    <button>DOWNLOAD HERE!</button>
                </a>
            </div>
        </div>
        <div className='train-insti-wrapper'>
            <div className='train-insti-content'>
                <h2>
                    PCP Accredited Residency<br/>
                    Training Institutions<br/>
                    By Region Fiscal Year<br/>
                    2022-2023
                </h2>
                <a href='https://drive.google.com/file/d/19Hd41z393oL8VWkdJQJ8_RLg3MgouvN5/view'>
                    <button>DOWNLOAD HERE!</button>
                </a>
            </div>
            <img src={TrainInstitutionImg} alt='PCP Accredited Residency Training Institutions' />
        </div>        
    </div>
  )
}
