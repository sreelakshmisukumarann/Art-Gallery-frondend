import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Artistcard from '../../components/Artistcard';
import Header from '../../components/Header/Header';
import { AllProfileAPI } from '../../services/allAPI';

function Artist() {
  const [allprofile, SetAllProfile] = useState([]);

  const getALLProfile = async () => {
    const result = await AllProfileAPI();
    console.log(result.data);
    SetAllProfile(result.data);
  };

  useEffect(() => {
    getALLProfile();
  }, []);

  // Filter profiles with role 'artist'
  const artistProfiles = allprofile.filter((item) => item.role === 'artist');

  return (
    <>
      <Header />

      <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
        <h1 style={{ color: '#e3b3ab', fontWeight: 'bolder' }}>Explore Artist</h1>
        <div className='d-flex mt-4 w-50'>
          <input type='text' className='form-control' placeholder='Search Artist' />
          <i style={{ marginLeft: '-45px', color: '#e3b3ab' }} className='fa-solid fa-magnifying-glass fa-rotate-90'></i>
        </div>
      </div>

      {/* artist list */}
      <Row className='mt-5 mb-5 p-1'>
        {artistProfiles.length > 0 ? (
          artistProfiles.map((item) => (
            <Col key={item._id} sm={12} md={6} lg={4} className='p-2'>
              <Artistcard profileinfo={item} />
            </Col>
          ))
        ) : (
          <p>Nothing to display</p>
        )}
      </Row>
    </>
  );
}

export default Artist;
