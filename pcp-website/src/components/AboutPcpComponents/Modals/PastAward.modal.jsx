
import Modal from 'react-bootstrap/Modal';
import "../../css/AboutCss/PastPres.modal.css";



export default function HistoryModal({pastAwardees, ...props}) {
  return (
    <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header 
            closeButton 
            className='past-pres-header'
        >
            <Modal.Title 
                id="contained-modal-title-vcenter"
                className='past-pres-title'
            >
                PCP PAST PRESIDENTS
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='past-pres-modal-body'>
            {pastAwardees.map((awards) => (
              <div className='awards-image' key={awards.id}>
                <img src={awards.image} />
              </div>
              
            ))}
        </Modal.Body>
        <Modal.Footer>
          <button 
            onClick={props.onHide}
            className='past-pres-modal-btn'
          >
            Close
          </button>
        </Modal.Footer>
    </Modal>
  );
}