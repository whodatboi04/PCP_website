import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { GiOpenFolder } from 'react-icons/gi'

export default function MOAPHOC1820modal({pahmoc1820, ...props}) {
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
            PAHMOC
        </Modal.Header>
        <Modal.Body className='MOA-modal-body'>
            {pahmoc1820.map((pahmocData1820) => (
                <div className='moa-dl-forms-modal' key={pahmocData1820.id}>
                    <h3><GiOpenFolder/> {pahmocData1820.title}</h3>
                    <div className='moa-dl-btn'>
                        <a 
                            href={pahmocData1820.viewFile} 
                            className='moa-btn from-top'
                        >
                            View
                        </a>
                        <a 
                            href={pahmocData1820.downloadFile}
                            download
                            className='moa-btn from-right'
                        >
                            Download
                        </a>
                    </div>        
                </div>
            ))}
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
