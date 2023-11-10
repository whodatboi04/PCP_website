
import Modal from 'react-bootstrap/Modal';
import '../../css/MembershipCss/HBM.modal.css'

export default function MemberModal(props) {
  return (
    <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header 
            closeButton 
            className='HWM-header'
        >
            <Modal.Title 
                id="contained-modal-title-vcenter"
                className='HWM-title'
            >
            
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='HWM-modal-body'>
            <h2>How to become a member</h2>
            <p> 
                1. Application to be a member of the Philippine College of Physicians (PCP) is 
                open to any bona fide licensed physician who has satisfactorily completed a residency training program
                in Internal Medicine in a PCP-accredited training medical institution.
            </p>
            <p>2. Submission of the following:</p>
            <div className='HWM-submission'>
                <p>i. A Letter of Intent to be a member of the College and it must be addressed to the PCP Board of Regents.</p>
                <p>ii. The Certificate of Completion (or Diploma) of Training in Internal Medicine duly signed by the Department of Medicine Chairman and the Hospital Director.</p>
                <p>iii. Endorsement letters  from  two (2) PCP Fellows in good standing of the College</p>
            </div>
            <p>3. When your application has been approved, one has to attend a PCP Members’ Orientation prior to the Induction ceremony held during the PCP Annual Congress.</p>
            <p>4. Application period is open every month of March of the calendar year.</p>
        </Modal.Body>
        <Modal.Footer>
        <button 
            onClick={props.onHide}
            className='HWM-modal-btn'
        >
            Close
        </button>
        </Modal.Footer>
    </Modal>
  );
}