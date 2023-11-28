import React, { useState }from 'react'
import { FaFolderOpen } from 'react-icons/fa6'
import '../css/HMOCss/FormsQuestions.css'
import { FaArrowCircleRight } from "react-icons/fa";
import HowToApplyModal from './HMOModals/HowToApply.modal'
import ProcessSubmit from './HMOModals/ProcessSubmit.modal'
import HowLongApprovedmodal from './HMOModals/HowLongApproved.modal';

export default function FormsQuestions() {
    const [showApplyModal, setShowApplyModal] = useState(false);
    const [showProcessModal, setShowProcessModal] = useState(false);
    const [showTimeApprovedModal, setShowTimeApprovedModal] = useState(false);
  return (
    <div className='formsQ-container'>
        <div className='formsQ-wrapper'>
            <div className='forms-moa'>
                <h1>FORMS</h1>
                <div className='forms-moa-wrapper'>
                    <a href='https://drive.google.com/drive/folders/1Ds6kIdvAZzYz_TAhA5Uok0GFJt1TDIZK'><FaFolderOpen/> AHMOPI</a>
                    <a href='https://drive.google.com/drive/folders/1hybY3OMilIdiB-WzfbuEoDWHkgxboWqz'><FaFolderOpen/> PAHMOC</a>
                </div>  
            </div>
            <div className='FAQ-wrapper'>
                <h2>Frequently Asked Questions (FAQ)</h2>
                <div className='FAQ-btn'>
                    <button onClick={() => setShowApplyModal(true)}><FaArrowCircleRight /> HOW TO APPLY FOR PCP - AHMOPI AND PAHMOC</button>
                    <HowToApplyModal 
                        show={showApplyModal}
                        onHide={() => setShowApplyModal(false)}
                    />
                    <button onClick={() => setShowProcessModal(true)}><FaArrowCircleRight /> PROCESS TO SUBMIT A COMPLAINT FORM</button>
                    <ProcessSubmit 
                        show={showProcessModal}
                        onHide={() => setShowProcessModal(false)}
                    />
                    <button onClick={() => setShowTimeApprovedModal(true)}><FaArrowCircleRight /> HOW LONG DOES IT TAKE FOR MY APPLICATION TO BE APPROVED ?</button>
                    <HowLongApprovedmodal 
                        show={showTimeApprovedModal}
                        onHide={() => setShowTimeApprovedModal(false)}
                    />
                </div>
                
            </div>
        </div>

    </div>
  )
}
