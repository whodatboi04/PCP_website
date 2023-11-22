import React from 'react'
import PAHMOC from '../img/HMOImage/PAHMOC.png'
import { FaFolderOpen } from 'react-icons/fa6'
import AHMOPI from '../img/HMOImage/AHMOPI.png'
import '../css/HMOCss/MOA.css'

export default function MOA() {
  return (
    <div className='hmo-container'>
        <div className='hmo-wrapper'>
            <div className='hmo-content-wrapper'>
                <div className='hmo-content-header'>
                    <img src={PAHMOC} alt='PAHMOC Image'/>
                    <div className='hmo-yellow-bg'></div>
                    <div className='hmo-grey-bg'></div>
                </div>
                <div className='MOA-btn'>
                    <button><FaFolderOpen/> MOA 2021-2023</button>
                    <button><FaFolderOpen/> MOA 2018-2020</button>
                </div>
            </div>
            <div className='hmo-content-wrapper'>
                <div className='hmo-content-header'>
                    <img src={AHMOPI} alt='PAHMOC Image'/>
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
