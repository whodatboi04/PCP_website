import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { GiOpenFolder } from 'react-icons/gi'

export default function MOAAMPI2123modal({ampiFile2123, ...props}) {
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
            {ampiFile2123.map((ampiData2123) => (
                <div className='moa-dl-forms-modal' key={ampiData2123.id}>
                    <h3><GiOpenFolder/> {ampiData2123.title}</h3>
                    <div className='moa-dl-btn'>
                        <a 
                            href={ampiData2123.viewFile} 
                            className='moa-btn from-top'
                        >
                            View
                        </a>
                        <a 
                            href={ampiData2123.downloadFile}
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
