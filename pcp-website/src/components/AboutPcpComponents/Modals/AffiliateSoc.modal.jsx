import Modal from 'react-bootstrap/Modal';
import "../../css/AboutCss/AffiliateSoc.modal.css";

export default function AfilliateSocModal({societies, affiliate, ...props }) {
  return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header 
            closeButton 
            className='society-header'
        >
            <Modal.Title 
                id="contained-modal-title-vcenter"
                className='society-title'
            >
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='society-modal-body'>
            <h4>Subspecialty Societies</h4>
            <p>
                The College has sixteen (16) subspecialty societies under it, namely:<br/>
                <br/>
                <b>Component Societies</b>
            </p>
            {societies.map((society) => (
                <div className='components-soc' key={society.id}>
                    <a href={society.link}>{society.title}</a>
                </div>
            ))}
            <p>
                <br/><b>Affiliate Societies</b>
            </p>
            {affiliate.map((affiliateSociety) => (   
                <div className='affiliate-soc' key={affiliateSociety.id}>
                    <a href={affiliateSociety.link}>{affiliateSociety.title}</a>
                </div>
            ))} 
        </Modal.Body>
        <Modal.Footer>
            <button 
                onClick={props.onHide}
                className='society-modal-btn'
            >
                Close
            </button>
        </Modal.Footer>
    </Modal>
  );
}
