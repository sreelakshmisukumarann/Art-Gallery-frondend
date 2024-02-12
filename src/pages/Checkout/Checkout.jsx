import React, { useEffect } from 'react'
import './Checkout.css'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { DeliveryDetailsAPI } from '../../services/allAPI';

function Checkout() {
   
  const navigate = useNavigate()
  //to store tokens
  const [token, setToken] = useState("")

  //state to store value
  const [details, Setdetails] = useState({
    fname:"",
    lastname:"",
    email:"",
    mobno:"",
    address:"",
    city:"",
    state:"",
    country:"",
    pincode:"",
    landmark:""
  })
  console.log(details);

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
        setToken(sessionStorage.getItem("token"))
    }
    else{
        setToken("")
    }
},[])
console.log(token);

//add delivery details
const addDeliveryDetails = async(e)=>{
  e.preventDefault()

  const {fname, lastname,email,mobno,address,city,state,country,pincode,landmark} = details

  if(!fname || !lastname || !email || !mobno || !address || !city || !state || !country || !pincode || !landmark){
   alert('please fill in the form compleatly')
  }
  else{
       
      if(token) {
       const reqHeader = {
           "Content-Type":"application/json",
           "Authorization":`Bearer ${token}`
       }
       const result = await DeliveryDetailsAPI(details,reqHeader)
       console.log(result);

       if(result.status===200){
           alert('Delivery details successfully added')
           //clear()
           navigate('/cart')
           
       }
       else{
           console.log(result);
           alert(result.response.data)
       }
  }}
}

  return (
    <>
        <Header/>
        <Row style={{height:'88vh'}}>
          <Col lg={7} sm={12}>
            <h4 className='mt-5'>Delivery Details</h4>
            <div className='mt-5'>


                    <Form>
                      <Row className="m-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          {/* <Form.Label>Email</Form.Label> */}
                          <Form.Control type="text" placeholder="First Name" value={details.fname} onChange={(e)=>Setdetails({...details,fname:e.target.value})}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          {/* <Form.Label>Password</Form.Label> */}
                          <Form.Control type="text" placeholder="Last Name" value={details.lastname} onChange={(e)=>Setdetails({...details,lastname:e.target.value})} />
                        </Form.Group>
                      </Row>

                      <Row className="m-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          {/* <Form.Label>Email</Form.Label> */}
                          <Form.Control type="email" placeholder="Email" value={details.email} onChange={(e)=>Setdetails({...details,email:e.target.value})} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          {/* <Form.Label>Password</Form.Label> */}
                          <Form.Control type="Number" placeholder="Phone number" value={details.mobno} onChange={(e)=>Setdetails({...details,mobno:e.target.value})} />
                        </Form.Group>
                      </Row>

                      <Form.Group className="m-4" controlId="formGridAddress1">
                        <Form.Control placeholder="Address" value={details.address} onChange={(e)=>Setdetails({...details,address:e.target.value})} />
                      </Form.Group>

                      

                      <Row className="m-3">
                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Control placeholder='City' value={details.city} onChange={(e)=>Setdetails({...details,city:e.target.value})} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Control placeholder='State' value={details.state} onChange={(e)=>Setdetails({...details,state:e.target.value})} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                          <Form.Control placeholder='Country' value={details.country} onChange={(e)=>Setdetails({...details,country:e.target.value})} />
                        </Form.Group>
                      </Row>

                      <Row className="m-3">
                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Control placeholder='Pincode' type='number' value={details.pincode} onChange={(e)=>Setdetails({...details,pincode:e.target.value})} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Control placeholder='land Mark' value={details.landmark} onChange={(e)=>Setdetails({...details,landmark:e.target.value})} />
                        </Form.Group>

                      </Row>


                      <Button variant="primary mt-4" type="submit" onClick={addDeliveryDetails}>
                        Edit
                      </Button>
                    </Form> 



                </div>
              </Col>
              <Col lg={5} sm={12} style={{backgroundColor:'white'}}>
                <Row lg={12} className='m-3' style={{
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url("https://cdn.pixabay.com/photo/2021/11/01/14/12/woman-6760524_1280.jpg")`,
                  minHeight: '82vh', // Add this to ensure the column takes the full height
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  
                </Row>
                {/* <Row lg={12}>
                  <h5>By Berlin steve</h5>
                  <h4 className='mt-2'>No of Items 5</h4>
                  <h3 className='mt-1'>Total Price : 456</h3>
                </Row> */}
                
              </Col>

            </Row>
    </>
  )
}

export default Checkout