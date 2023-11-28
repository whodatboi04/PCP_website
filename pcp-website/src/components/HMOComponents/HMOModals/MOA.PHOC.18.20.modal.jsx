import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { GiOpenFolder } from 'react-icons/gi'

export default function MOAPHOC1820modal(props) {
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
