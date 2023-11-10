import Modal from 'react-bootstrap/Modal';
import '../../css/MembershipCss/Member.modal.css'

export default function MemberModal(props) {
  return (
    <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id='member-modal'
    >
        <Modal.Header 
            closeButton 
            className='member-header'
        >
            <Modal.Title 
                id="contained-modal-title-vcenter"
                className='member-title'
            >
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='member-modal-body'>
            <h2>Member</h2>
            <p>A Member in the College shall meet the following requirements: </p>
            <div className='member-body-content'>
                <p>1. He must have completed his residency training in Internal Medicine in a PCP-accredited training program; or he must be an AFFILIATE SOCIETY BOARD CERTIFIED member;</p>
                <p>2. He must be of good moral character and good ethical standing in the profession;</p>
                <p>3. He must submit an application to the Board of Regents in a manner and form prescribed by the Membership and Credentials Committee and shall pay the corresponding annual membership dues;</p>
                <p>4. The application must be endorsed by at least two (2) Fellows in good standing of the College; OR BY AT LEAST TWO (2) CURRENT MEMBERS OF THE BOARD OF DIRECTORS OF THE COMPONENT OR AFFILIATE SOCIETY CONCERNED.</p>
            </div>
            <p>
            The fast-track process to PCP Fellowship also published in this brochure is aimed at guiding the resident-trainee once he enters his residency training in Internal Medicine in a 
            PCP-accredited hospital. With this information, a prospective member will know exactly at which point he should submit his application, the stages he has to go through and how much time he has, to process his application.  
            A prospective member will know what to expect and what is expected of him.  An applicant who plans his future in medical practice will do well to keep this information in mind.
            </p>
        </Modal.Body>
        <Modal.Footer>
        <button 
            onClick={props.onHide}
            className='member-modal-btn'
        >
            Close
        </button>
        </Modal.Footer>
    </Modal>
  );
}