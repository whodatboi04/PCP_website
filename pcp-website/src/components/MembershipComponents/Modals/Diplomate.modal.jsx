
import Modal from 'react-bootstrap/Modal';
import '../../css/MembershipCss/Diplo.modal.css'

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
            className='Diplo-header'
        >
        </Modal.Header>
        <Modal.Body className='Diplo-modal-body'>
            <h2>Diplomate</h2>
            <p>A Diplomate in the College shall meet the following requirements: </p>
            <div className='Diplo-body-content'>
                <p>1. He must meet all the qualifications and requirements of a Member;</p>
                <p>2. He must have passed the INTERNAL MEDICINE certifying examination given by the Philippine Specialty Board of Internal Medicine;</p>
                <p>3. A Diplomate can qualify for Fellowship in the College after a prescribed period of time to be determined by the Board of Regents.</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
        <button 
            onClick={props.onHide}
            className='Diplo-modal-btn'
        >
            Close
        </button>
        </Modal.Footer>
    </Modal>
  );
}