import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import video from '../video/aboutvideo.mp4'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <div style={{width:'100%',height:'auto', position:'relative'}}>
        {/* <div className='container-fluid'>
          <h1 style={{textAlign:'center',fontSize:'4rem',color:'#333',padding:'1rem',margin:'2rem 0'}}>Welcome to <span style={{color:'orange'}}>ArtNook</span></h1>
  
          <Row className='d-flex align-items-center' style={{gap:'2rem',flexWrap:'wrap',padding:'2rem 0',paddingBottom:'3rem'}}>
            <Col md={6} sm={12} style={{flex:'1 1 40rem',position:'relative'}}>
                <img src="https://cdn.pixabay.com/photo/2019/07/03/03/53/one-autumn-afternoon-4313573_1280.jpg" width={500} height={400} alt="" />
            </Col>
  
            <Col md={6} sm={12} className='py-3 py-md-0 '>
              <Row className='text-center'>
                
                  <h3 style={{fontSize:'3 rem',color:'#333'}}>Art Gallery</h3>
                
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quod est ad cum facere corrupti illo autem, mollitia porro totam fuga quaerat placeat ratione odit? Iusto ipsa molestias tempora accusantium!</p>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad quisquam eius, omnis quidem ipsa rerum ipsam rem animi voluptate minima, voluptatibus vero, nemo voluptates at possimus nihil veniam dolore.</p>

                
                <Link><Button className='btn rounded' style={{background:"#6b9646"}}>Learn More</Button></Link>
              </Row>
            </Col>
          </Row>
        </div> */}

        <div className='mt-5'>
          <h2 className='mt-5'>Welcome to<span className='text-warning'> Art Nook</span></h2>
        </div>
  
      </div>
    </>
  )
}

export default About