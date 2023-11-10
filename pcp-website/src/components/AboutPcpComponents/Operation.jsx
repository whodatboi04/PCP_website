import React from 'react'
import prcImage from '../img/AboutPcpImage/prc-image.png'
import '../css/AboutCss/Operation.css'
import OperationModal from '../AboutPcpComponents/Modals/Operation.modal'

export default function Operation() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className='operation-act-container'>
      <div className='prc-wrapper'>
        <div className='prc-square'>
          <img src={prcImage} alt='PRC Founding Anniversary 2023'/>
        </div>
      </div>
      <div className='operation-content'>
        <h1><span>OPERA</span>TIONS<br/> AND <span>HIGHLIGHTS</span><br/> OF <span>ACT</span>IVITIES</h1>
        <p>
          The College operates on a fiscal year basis (June 1st to May 31st of the following year) 
          and is run by a full-time staff of eleven. The nine members of the Board of Regents are 
          elected each year...
        </p>
        <button onClick={() => setModalShow(true)}>See More</button>
        <OperationModal 
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  )
}
