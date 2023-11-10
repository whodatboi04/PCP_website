import React from 'react'
import "../css/AboutCss/MissionVision.css"
import MVlogo from "../img/AboutPcpImage/mission-logo.png"
import miniLogo from "../img/AboutPcpImage/pcp-mini-logo.png"
import MVModal from "../AboutPcpComponents/Modals/MV.modal"

export default function MissionVission() {
    const [modalShow , setModalShow] = React.useState(false);
  return (
    <div className='mv-container'>
        <div className='mv-content'>
            <h1>MISSION<br/> 
                <span>AND </span>
                VISION
            </h1>
            <p>
                <i>
                    Vision<br />
                    A world class organization of physicians that sets the highest standards and ethical ideals in the 
                    practice of Internal Medicine and provides dynamic leadership in the promotion of health and quality of 
                    life in the management of disease and in the formulation
                    of relevant health policies.<br/>
                    <br/>
                    Mission<br/>
                    To lead in setting the highest standards in medical diagnosis..
                </i>
            </p>
            <button onClick={() => setModalShow(true)} >See More</button>
            {/* Modal */}
            <MVModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
        <div className='mv-logo'>
            <div className='mv-square'>
            <img 
                src={MVlogo} 
                alt='Mission and Vision Logo' 
                className='mv-mini-logo'
            />
            <img 
                src={miniLogo} 
                alt='Philippine College of Physicians'
                className='pcp-mini-logo'
            />
            </div>
        </div>
    </div>
  )
}
