
import Modal from 'react-bootstrap/Modal';
import "../../css/AboutCss/OrgGlance.modal.css";


export default function OrgGlanceModal(props) {
  return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header 
          closeButton 
          className='org-header'
        >
        
        </Modal.Header>
        <Modal.Body className='org-modal-body'>
            <h4>The <span>Organization</span> at a <span>Glance</span></h4>
            <p>
              The PCP is the umbrella organization of 
              internists in the Philippines and was organized in 1953. 
            <br/>The 3 main reasons for its existence are: <br/>
            <br/>
              &nbsp;&nbsp;&nbsp; 1. Continuing Medical Education of internists and other physicians;<br/>
              &nbsp;&nbsp;&nbsp; 2. Certification and Regulation of the Subspecialty of Internal Medicine;<br/>
              &nbsp;&nbsp;&nbsp; 3. Accreditation and Certification of the Training Programs for Internal Medicine in the Philippines.<br/>
            <br/>
              Dr. Gonzalo F. Austria is the Founding President of the PCP.<br />
            <br />
              The PCP is an affiliate society of the Philippine Medical Association and a member-society of the International 
              Society of Internal Medicine. The College has a total of 9,111 members composed of Fellows, Diplomates and Members. 
              the PCP to an internist who has fulfilled all the requirements set by the Philippine Specialty Board of Internal 
              Medicine which administers the certifying examinations annually. 
              The title of Fellow is awarded to a Diplomate in Internal Medicine who has fulfilled the requirements for membership as Fellow in the PCP. 
              Thus, an internist who has satisfactorily passed and fulfilled the requirements of the 
              PCP and having been certified as such, may carry the title Diplomate in Internal Medicine and Fellow of the PCP (FPCP). <br/>
            <br />
              The College has 16 component and affiliate societies under it. It also has 22 regional chapters nationwide and 8 chapters on NCR.
            </p>
        </Modal.Body>
        <Modal.Footer>
          <button 
            onClick={props.onHide}
            className='org-modal-btn'
          >
            Close
          </button>
        </Modal.Footer>
    </Modal>
  );
}