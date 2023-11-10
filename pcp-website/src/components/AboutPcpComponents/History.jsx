import React from 'react'
import historyLogo from '../img/AboutPcpImage/pcp-history-logo.png'
import "../css/AboutCss/History.css"
import HistoryModal from "../AboutPcpComponents/Modals/History.modal"

export default function History() {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className='history-container'>
        <div className='history-wrapper'>
            <div className='history-content'>
                <h1>HI<span>STORY</span></h1>
                <p>
                    <i>
                        Every organization has a unique story. The PCP story spans five decades. 
                        It began in the early 1950’s as a cast of twenty internists, 
                        who had the guts to form a society at a time when the norm for hundreds of other 
                        internists was to be a non-member. Thus, Dr. Gonzalo Austria’s group struggled for the rest of the fifties, 
                        going through a sort of gestational period.
                    </i>
                </p>
                <button onClick={() => setModalShow(true)}>See more</button>
                {/* Modal */}
                <HistoryModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
            <div className='history-pcp-logo'>
                <img src={historyLogo} alt='Philippine College of Physians' />
            </div>
        </div>
    </div>
  )
}
