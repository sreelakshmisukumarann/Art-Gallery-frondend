import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function AddWork() {

    //state hold the value from the input box to add work
    const [addwork, SetAddWork] = useState({
        title:"",
        description:"",
        category:"",
        price:"",
        artImg:""

    })
    console.log(addwork);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Button className='btn' onClick={handleShow}>Add Work
        </Button>
        

        <Modal show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Add your Art Work</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row className='align-items-center mb-3 mt-3'>
            <Col md={4} className='text-center'>
              <input type="file" />
            </Col>
            <Col md={8}>
              
             <input className='form-control' type='text' placeholder='Art Title' value={addwork.title} onChange={(e)=>SetAddWork({...addwork,title:e.target.value})}></input>

             <textarea className='form-control mt-3' type='text' placeholder='Description' value={addwork.description} onChange={(e)=>SetAddWork({...addwork,description:e.target.value})} ></textarea>

                <label for="category" className='mt-4'>Category:</label>
                <select id="category" name="category" required value={addwork.category} onChange={(e)=>SetAddWork({...addwork,category:e.target.value})}>
                    <option value=""></option>
                    <option value="painting">Painting</option>
                    <option value="sculpture">Sculpture</option>
                    <option value="photography">Photography</option>
                    <option value="painting">Digital Art</option>
                    <option value="painting">Mixed Media</option>
                    <option value="painting">Decorative</option>
                    <option value="painting">Botanicals</option>
                    <option value="painting">Places</option>
                    <option value="painting">Traditional</option>
                    <option value="painting">Graphic</option>
                    <option value="painting">Other</option>
                   
                </select><br></br>

             <input className='form-control mt-3' type='number' placeholder='Price' value={addwork.price} onChange={(e)=>SetAddWork({...addwork,price:e.target.value})}></input>
             

            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddWork