
import Modal from 'react-bootstrap/Modal';
import "../../css/AboutCss/History.modal.css";


export default function HistoryModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header 
          closeButton 
          className='history-header'
        >
            <Modal.Title 
              id="contained-modal-title-vcenter"
              className='history-title'
            >
                Hi<span>story</span>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='history-modal-body'>
            <h4>Philippine College of Physicians</h4>
            <p>
              Every organization has a unique story. The PCP story spans five decades.  
              It began in the early 1950’s as a cast of twenty internists, who had the guts to form a 
              society at a time when the norm for hundreds of other internists was to be a non-member.  
              Thus, Dr. Gonzalo Austria’s group struggled for the rest of the fifties, going through a sort of gestational period. <br/>
            <br/>
              By the 1960’s, changes were afoot as dynamic PCP leaders dared to envision the PCP leading a federation of societies.  
              It tried to wield control and influence over six specialty societies existing at the time. 
              With only a little over a hundred members, the PCP persisted on a dream of becoming the internists’ gatekeeper 
              establishing a Specialty Accreditation Board where all other internists would have to pass through.  
              Despite a period of debate, the PCP persevered in its vision, 
              to the extent of getting every potential detractor into the society, as a PCP Fellow, using a grandfathers’ clause. <br/>
            <br/>
              Not content with its newfound strength, the PCP in the 1980’s embarked on an intensive internal training and testing of its members, and by the decade’s 
              end enjoyed widening control over a majority of internal medicine graduates, training hospitals and research activities.<br/>
            <br/>
              By the 1990’s, we see that the capacity building of the eighties had borne fruit.  
              From a membership of 100 in the sixties, members reached 444 in the eighties, and 
              in 2002, the PCP boasts an astonishing 5,000 members.  Today, this “mother organization” 
              has amalgamated thirteen specialty societies and has reached unheard of power and prestige.  
              But the tale does not have a certain happy ending as sudden political challenges in the new millennium 
              places the PCP in yet another crossroads.<br />
            <br />
              Taken from the PCP Coffee Table Book<br/>
              "PCP Through 50 Years: Fulfilling the Vision"
            </p>
        </Modal.Body>
        <Modal.Footer>
          <button 
            onClick={props.onHide}
            className='history-modal-btn'
          >
            Close
          </button>
        </Modal.Footer>
    </Modal>
  );
}