import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../services/baseurl';

function ViewArtist() {
  const { id } = useParams();
  console.log(id);

  // State for artist data
  const [artistData, setArtistData] = useState(null);

  // State for artist works
  const [artistWorks, setArtistWorks] = useState([]);

  // Function for fetching artist data
  const fetchArtistData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/profile/${id}`);
      const data = await response.json();
      console.log(data);
      setArtistData(data);
    } catch (error) {
      console.error('Error fetching artist data:', error);
    }
  };

  // Function for fetching artist works
  const fetchArtistWorks = async () => {
    try {
      const response = await fetch(`${BASE_URL}/artworks/artist/${id}`);
  
      if (!response.ok) {
        if (response.status === 404) {
          // Handle 404 error (resource not found)
          console.error('Artist works not found:', response.statusText);
        } else {
          // Handle other non-OK responses
          console.error('Error fetching artist works:', response.statusText);
        }
        return;
      }
  
      const data = await response.json();
      console.log(data);
      setArtistWorks(data);
    } catch (error) {
      console.error('Error fetching artist works:', error);
    }
  };

  // Use effect to fetch artist data
  useEffect(() => {
    fetchArtistData();
  }, [id]);

  // Use effect to fetch artist works, runs whenever artistData or id changes
  useEffect(() => {
    if (artistData) {
      fetchArtistWorks();
    }
  }, [artistData, id]);

  if (!artistData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <Row>
        <Col lg={12} sm={6} className='mt-5 d-flex' style={{ marginLeft: '300px' }}>
          <div className='ms-5'><img src={artistData ? `${BASE_URL}/profileuploads/${artistData.profileImg}` : 'https://i.pinimg.com/originals/8a/55/99/8a5599792c0d7b0a02377b97fafe76a9.jpg'} alt="" height={230} width={230} style={{ borderRadius: '50%' }} /></div>
          <div className='ms-5 mt-5'>
            <h3>{artistData.name}</h3>
            <h6 className='mt-3'>{artistData.role}</h6>
            <h5 className='mt-3'>{artistData.place}, {artistData.country}</h5>
            {/* <h6 className='mt-3'>{artistData.length}</h6> */}
          </div>
        </Col>
        <Row className='mt-3'>
          <div className='d-flex justify-content-center align-items-center p-1'>
            <p style={{ textAlign: 'justify', width: '820px' }}>{artistData.about}</p>
          </div>
        </Row>
      </Row>
      <hr />
      {/* <h6 className='mt-3'>See All Works</h6>
      <Row className='mt-5'>
        
          {artistWorks?.length>0?
          artistWorks.map((item)=>(<Col lg={3} sm={12} md={6}>
            <div className="position-relative shadow rounded">
              <div className='p-2'> <Image src="" rounded /></div>
              <div className='mt-2 p-3'>
                <h6>Category:{item}</h6>
                <div className='d-flex justify-content-between'>
                  <i className="fa-regular fa-heart fa-1x"></i>
                  <i className="fa-solid fa-cart-shopping fa-1x"></i>
                </div>
              </div>
            </div>
          </Col>)):<p>Nothing work added.. Please add your work</p>}
    
      </Row> */}
    </>
  );
}

export default ViewArtist;
