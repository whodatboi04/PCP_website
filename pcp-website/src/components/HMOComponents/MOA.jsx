import React, { useState } from 'react'
import PAHMOC from '../img/HMOImage/PAHMOC.png'
import { FaFolderOpen } from 'react-icons/fa6'
import AHMOPI from '../img/HMOImage/AHMOPI.png'
import '../css/HMOCss/MOA.css'
import MOAModal from './HMOModals/MOA.PHOC.21.23.modal'
import PAHMOCData  from '../../data/HMOData/PAHMOC'
import PAHMOCModal1820 from './HMOModals/MOA.PHOC.18.20.modal'
import AHMOPIModal2123 from './HMOModals/MOA.AMPI.21.23.modal'
import AHMOPIModal1820 from './HMOModals/MOA.AMPI.18.20.modal'

export default function MOA() {
    const [showModalPahmoc, setShowModalPahmoc ] = useState(false);
    const [show1820PamocModal, setShow1820PahmocModal] = useState(false);
    const [show2123AHMPIModal, setShow2123AHMPIModal] = useState(false);
    const [show1820AHMPIModal, setShow1820AHMPIModal] = useState(false);
  return (
    <div className='hmo-container'>
        <div className='hmo-wrapper'>
            <div className='hmo-content-wrapper'>
                <div className='hmo-content-header'>
                    <img src={PAHMOC} alt='PAHMOC'/>
                    <div className='hmo-yellow-bg'></div>
                    <div className='hmo-grey-bg'></div>
                </div>
                <div className='MOA-btn'>
                    <button
                        onClick={() => setShowModalPahmoc(true)}
                    ><FaFolderOpen/> MOA 2021-2023</button>
                    <MOAModal 
                        show={showModalPahmoc}
                        onHide={() => setShowModalPahmoc(false)}
                        pahmocData={PAHMOCData}
                    />
                    <button onClick={() => setShow1820PahmocModal(true)}>
                        <FaFolderOpen/> MOA 2018-2020
                    </button>
                    <PAHMOCModal1820 
                        show={show1820PamocModal}
                        onHide={() => setShow1820PahmocModal(false)}
                    />
                </div>
            </div>
            <div className='hmo-content-wrapper'>
                <div className='hmo-content-header'>
                    <img src={AHMOPI} alt='AHMOPI'/>
                    <div className='hmo-lightGreen-bg'></div>
                    <div className='hmo-grey-bg'></div>
                </div>
                <div className='MOA-btn'>
                    <button onClick={() => setShow2123AHMPIModal(true)}><FaFolderOpen/> MOA 2021-2023</button>
                    <AHMOPIModal2123 
                        show={show2123AHMPIModal}
                        onHide={() => setShow2123AHMPIModal(false)}
                    />
                    <button onClick={() => setShow1820AHMPIModal(true)}><FaFolderOpen/> MOA 2018-2020</button>
                    <AHMOPIModal1820 
                        show={show1820AHMPIModal}
                        onHide={() => setShow1820AHMPIModal(false)}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
