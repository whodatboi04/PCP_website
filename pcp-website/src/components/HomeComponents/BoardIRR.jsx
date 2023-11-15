import React from 'react'
import BoardReso from '../img/HomeImage/pcp-cpd-board-reso.png'
import IirMemCom from '../img/HomeImage/IRR.png'
import IirAssist from '../img/HomeImage/pcp-assistance-program.png'
import '../css/HomeCss/BoardIRR.css'

export default function BoardIRR() {
  return (
    <div className='irr-container'>
        <div className='irr-wrapper'>
            <div className='irr-content'>
                <img src={BoardReso} alt='Board Resolution' />
                <div className='irr-overlay'></div>
                <div className='irr-context'>
                    <h3>PCP-CPD Board Resolution</h3>
                    <button>
                        Read More
                    </button>
                </div>
            </div>
            <div className='irr-content'>
                <img src={IirMemCom} alt='Board Resolution' />
                <div className='irr-overlay'></div>
                <div className='irr-context'>
                    <h3>PCP-CPD Board Resolution</h3>
                    <button>
                        Read More
                    </button>
                </div>
            </div>
            <div className='irr-content'>
                <img src={IirAssist} alt='Board Resolution' />
                <div className='irr-overlay'></div>
                <div className='irr-context'>
                    <h3>PCP-CPD Board Resolution</h3>
                    <button>
                        Read More
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}
