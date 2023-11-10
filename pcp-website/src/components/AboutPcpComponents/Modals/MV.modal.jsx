
import Modal from 'react-bootstrap/Modal';
import "../../css/AboutCss/mv.modal.css";


export default function MVModal(props) {
  return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header 
            closeButton 
            className='mv-header'
        >
        
        </Modal.Header>
        <Modal.Body className='mv-modal-body'>
            <h4>MISSION <span>AND</span> VISION</h4>
            <p>
            <b>Vision</b><br/>
            <br/>
            A world class organization of physicians that sets the highest standards 
            and ethical ideals in the practice of Internal Medicine and provides dynamic leadership in the 
            promotion of health and quality of life in the management of disease and in the formulation of relevant health policies.<br/>
            <br/>
            <b>Mission</b><br/>
            <br/>
            To lead in setting the highest standards in medical diagnosis, treatment, prevention and service in the Philippines by:<br/>
            <br/>
            &nbsp;&nbsp;&nbsp;- Providing Continuing Medical Education and training of its present and future members and staff<br/>
            &nbsp;&nbsp;&nbsp;- Providing an environment that promotes ethical, high-quality and cost-effective medical care<br/>
            &nbsp;&nbsp;&nbsp;- Providing stimulus, advice and incentive for research and publication<br/>
            &nbsp;&nbsp;&nbsp;- Providing timely communication and advice to health agencies, governmental and non-governmental organizations<br/>  
            &nbsp;&nbsp;&nbsp;- Being the leading resource of education and information to all internists<br/>
            &nbsp;&nbsp;&nbsp;- Being responsive to the changing environment<br/>
            &nbsp;&nbsp;&nbsp;- Putting a premium on excellence, competence and compassion<br/>
            &nbsp;&nbsp;&nbsp;- Putting service above gain<br/>
            </p>
        </Modal.Body>
        <Modal.Footer>
          <button 
            onClick={props.onHide}
            className='mv-modal-btn'
          >
            Close
          </button>
        </Modal.Footer>
    </Modal>
  );
}