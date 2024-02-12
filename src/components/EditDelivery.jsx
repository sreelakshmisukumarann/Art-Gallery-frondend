import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditDelivery() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <button className='btn' onClick={handleShow}> <i class="fa-solid fa-pen-to-square me-3 text-info"></i></button>

     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className='align-items-center mb-3 mt-3'>
           
            <Col md={8}>
              
             <input className='form-control' type='text' placeholder='Project Title'  ></input>

             <input className='form-control mt-3' type='text' placeholder='Language Used' ></input>

             <input className='form-control mt-3' type='text' placeholder='Github Link'  ></input>

             <input className='form-control mt-3' type='text' placeholder='Website Link'  ></input>

             <textarea className='form-control mt-3' type='text' placeholder='Project Overview' ></textarea>
            
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default EditDelivery