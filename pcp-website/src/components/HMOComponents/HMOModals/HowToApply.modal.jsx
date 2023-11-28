import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Step1 from '../../img/HMOImage/HowToApplyImage/1.jpg'
import Step2 from '../../img/HMOImage/HowToApplyImage/2.jpg'
import Step3 from '../../img/HMOImage/HowToApplyImage/3.jpg' 
import Step4 from '../../img/HMOImage/HowToApplyImage/4.jpg'
import Step5 from '../../img/HMOImage/HowToApplyImage/5.jpg'
import Step6 from '../../img/HMOImage/HowToApplyImage/6.jpg'
import Step7 from '../../img/HMOImage/HowToApplyImage/7.jpg'
import Step8 from '../../img/HMOImage/HowToApplyImage/8.jpg'
import Step9 from '../../img/HMOImage/HowToApplyImage/9.jpg'
import '../../css/HMOCss/HowToApply.modal.css'


export default function HowToApplymodal(props) {
  return (
    <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header 
            closeButton 
            className='MOA-header'
        >
            How To Apply For PCP - AHMOPI AND PAHMOC
        </Modal.Header>
        <Modal.Body className='HowToApply-modal-body'>
            <img src={Step1} alt='Step 1' />
            <img src={Step2} alt='Step 2' />
            <img src={Step3} alt='Step 3' />
            <img src={Step4} alt='Step 4' />
            <img src={Step5} alt='Step 5' />
            <img src={Step6} alt='Step 6' />
            <img src={Step7} alt='Step 7' />
            <img src={Step8} alt='Step 8' />
            <img src={Step9} alt='Step 9' />
        </Modal.Body>
        <Modal.Footer>
        <button 
            onClick={props.onHide}
            className='moa-modal-btn'
        >
            Close
        </button>
        </Modal.Footer>
    </Modal>
  )
}
