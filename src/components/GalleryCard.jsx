import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Col } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';
import artimg from '../assests/Screenshot 2023-12-29 155222.png';
import { addWishlistAPI } from '../services/allAPI';

function GalleryCard({ art, userToken }) {
  const [show, setShow] = useState(false);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddToWishlist = async () => {
    try {
      if (!userToken) {
        console.error('User token is missing.');
        return;
      }
  
      if (isAddedToWishlist) {
        console.log('Artwork already added to wishlist');
        return;
      }
  
      const response = await addWishlistAPI(
        { artworkId: art._id },
        { headers: { Authorization: `Bearer ${userToken}` } }
      );
  
      // Check if the response status is 201 (Created)
      if (response.status === 201) {
        setIsAddedToWishlist(true);
        console.log('Artwork added to wishlist successfully:', response.data);
      } else {
        console.error('Error adding to wishlist:', response.data);
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <div className='mt-5'>
      <Card style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', position: 'relative' }}>
        <Card.Img variant="top" src={art ? `${BASE_URL}/uploads/${art.artImg}` : artimg} style={{ height: '300px' }} />
        <Card.Body>
          <Card.Title className='text-center'>{art.title}</Card.Title>
          <Card.Text>
            <p>12 × 16, <span>Multiple Sizes</span></p>
            <p className='fw-bolder text-center'>₹{art.price}</p>
          </Card.Text>
          <div className='d-flex align-items-center justify-content-between'>
            <Button variant="outline-warning" className='mx-auto' onClick={handleShow}>Add to Cart</Button>
            <Button
              variant="outline-warning"
              className='mx-auto'
              onClick={handleAddToWishlist}
              disabled={isAddedToWishlist}
            >
              {isAddedToWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size='xl'>
        
      </Modal>
    </div>
  );
}

export default GalleryCard;
