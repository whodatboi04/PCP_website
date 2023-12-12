import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { GiOpenFolder } from 'react-icons/gi'


export default function MOAAMPI1820modal({ampiData1820, ...props}) {
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
            {ampiData1820.map((ampiFile1820) => (
                <div className='moa-dl-forms-modal' key={ampiFile1820.id}>
                    <h3><GiOpenFolder/> {ampiFile1820.title}</h3>
                    <div className='moa-dl-btn'>
                        <a 
                            href={ampiFile1820.viewFile} 
                            className='moa-btn from-top'
                        >
                            View
                        </a>
                        <a 
                            href={ampiFile1820.downloadFile}
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
