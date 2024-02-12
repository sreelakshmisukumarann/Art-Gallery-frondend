import React from 'react';
import AdminSidebar from './AdminSidebar';
import { Container, Row, Col } from 'react-bootstrap';

function AdminDashboard() {
  return (
    <div className='d-flex'>
      {/* Sidebar Component */}
      <div>
        <AdminSidebar />
      </div>

      {/* Main Content Area */}
      <div className='flex-grow-1'>
        <Container fluid>
          {/* Header Section */}
          <Row>
            <Col className='shadow rounded mt-2'>
              <h1 className='mt-4'>Admin Dashboard</h1>
              <hr />
            </Col>
          </Row>

          {/* Main Content Sections */}
          <div className='d-flex'>
            <Row className='p-2 ms-3'>
              {/* <Col lg={6} className='shadow rounded'>
               
               <div style={{width:'700px'}}>
                  <h2>Section 1</h2>
                  <p>This is the content of Section 1.</p>
               </div>
              </Col>

              <Col lg={6} className='shadow rounded'>
                
                <h2>Section 2</h2>
                <p>This is the content of Section 2.</p>
              </Col> */}
              <div><img src="https://cdn.dribbble.com/users/211200/screenshots/16803081/media/8911d6150edba11673dbbabc94f3c976.png?resize=1200x900&vertical=center" alt="" height={600} className='rounded' width={1100} /></div>
            </Row>
          </div>

          {/* Add more rows for additional sections */}

        </Container>
      </div>
    </div>
  );
}

export default AdminDashboard;
