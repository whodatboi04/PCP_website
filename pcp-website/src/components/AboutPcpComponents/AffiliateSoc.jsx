import React from 'react'
import '../css/AboutCss/AffiliateSoc.css'
import AffiliateSocModal from './Modals/AffiliateSoc.modal'
import cmpntsSocietyData from '../../data/AboutPcpData/cmpntsSocietyData.json'
import affiliateSocData from '../../data/AboutPcpData/affiliateSocData.json'

export default function AfilliateSoc() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className='affil-container'>
            <h1>SPECIALTIES AND AFILLIATE SOCIETIES</h1>
            <button onClick={() => setModalShow(true)}>CLICK HERE</button>
            <AffiliateSocModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
                societies={cmpntsSocietyData}
                affiliate={affiliateSocData}
            />
        </div>
    )
}
