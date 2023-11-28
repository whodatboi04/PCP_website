import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Step1 from '../../img/HMOImage/SubmitComplaintForm/1.jpg'
import Step2 from '../../img/HMOImage/SubmitComplaintForm/2.jpg'
import Step3 from '../../img/HMOImage/SubmitComplaintForm/3.jpg'
import '../../css/HMOCss/ProcessSubmit.modal.css'

export default function ProcessSubmitmodal(props) {
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
            Process To Submit a Complain Form
        </Modal.Header>
        <Modal.Body className='process-submit-modal-body'>
            <img src={Step1} alt='Step 1' />
            <img src={Step2} alt='Step 2' />
            <img src={Step3} alt='Step 3' />
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
