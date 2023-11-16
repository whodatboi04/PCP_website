import React from 'react'
import BoardReso from '../img/HomeImage/pcp-cpd-board-reso.png'
import IirMemCom from '../img/HomeImage/IRR.png'
import IirAssist from '../img/HomeImage/pcp-assistance-program.png'
import '../css/HomeCss/BoardIRR.css'
import { SlBookOpen } from "react-icons/sl"

export default function BoardIRR() {
  return (
    <div className='irr-container'>
        <div className='irr-wrapper'>
            <div className='irr-card-item'>
                <div className='irr-content'>
                    <img src={BoardReso} alt='Board Resolution' />
                    <div className='irr-overlay'>
                        <a className='irr-circle-icon'>
                            <SlBookOpen className='irr-icon' />
                        </a>
                    </div>
                    <div className='irr-context'>
                        <h3>PCP-CPD Board Resolution</h3>
                        <button>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
            <div className='irr-card-item'>
                <div className='irr-content'>
                    <img src={IirMemCom} alt='Board Resolution' />
                    <div className='irr-overlay'>
                        <a className='irr-circle-icon'>
                            <SlBookOpen className='irr-icon' />
                        </a>
                    </div>
                    <div className='irr-context'>
                        <h3>PCP-CPD Board Resolution</h3>
                        <button>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
            <div className='irr-card-item'>
                <div className='irr-content'>
                    <img src={IirAssist} alt='Board Resolution' />
                    <div className='irr-overlay'>
                        <a className='irr-circle-icon'>
                            <SlBookOpen className='irr-icon' />
                        </a>
                    </div>
                    <div className='irr-context'>
                        <h3>PCP-CPD Board Resolution</h3>
                        <button>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
