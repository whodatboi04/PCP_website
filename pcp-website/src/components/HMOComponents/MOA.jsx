import React, { useState } from 'react'
import PAHMOC from '../img/HMOImage/PAHMOC.png'
import { FaFolderOpen } from 'react-icons/fa6'
import AHMOPI from '../img/HMOImage/AHMOPI.png'
import '../css/HMOCss/MOA.css'
import MOAModal from './HMOModals/MOA.modal'
import PAHMOCData  from '../../data/HMOData/PAHMOC'

export default function MOA() {
    const [showModalPahmoc, setShowModalPahmoc ] = useState(false);
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
                    <button><FaFolderOpen/> MOA 2018-2020</button>
                </div>
            </div>
            <div className='hmo-content-wrapper'>
                <div className='hmo-content-header'>
                    <img src={AHMOPI} alt='AHMOPI'/>
                    <div className='hmo-lightGreen-bg'></div>
                    <div className='hmo-grey-bg'></div>
                </div>
                <div className='MOA-btn'>
                    <button><FaFolderOpen/> MOA 2021-2023</button>
                    <button><FaFolderOpen/> MOA 2018-2020</button>
                </div>
            </div>
        </div>
    </div>
  )
}
