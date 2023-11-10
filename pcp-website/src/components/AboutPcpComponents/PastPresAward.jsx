import React from 'react'
import '../css/AboutCss/PastPresAward.css'
import PastPresModal from './Modals/PastPres.modal'
import { pastPresData } from '../../data/AboutPcpData/pastPresData'
import PastAwardModal from './Modals/PastAward.modal'
import { pastAwardData } from '../../data/AboutPcpData/pastAwardData'


export default function PastPresAward() {
  const [modalShow, setModalShow] = React.useState(false);

  const [modalShow1, setModalShow1] = React.useState(false);
  return (
    <div className='past-container'>
        <div className='past-president'>
            <h1>PCP Past President</h1>
            <button onClick={() => setModalShow(true)}>CLICK HERE</button>
            <PastPresModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              pastPresidents={pastPresData}
            />
        </div>
        <div className='past-awardees'>
            <h1>
                Past PCP Awardees<br/>
                (1979 - Present)
            </h1>
            <button onClick={() => setModalShow1(true)}>CLICK HERE</button>
            <PastAwardModal 
              show={modalShow1}
              onHide={() => setModalShow1(false)}
              pastAwardees={pastAwardData}
            />
        </div>
    </div>
  )
}
