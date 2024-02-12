import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import { AllArtAPI, addToCartAPI, addWishlistAPI } from '../../services/allAPI';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import artimg from '../Artwork/OIP.jpg'
import { BASE_URL } from '../../services/baseurl';
import Modal from 'react-bootstrap/Modal';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Artwork() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [approvedArtworks, setApprovedArtworks] = useState([]);
  const [token, setToken] = useState("");
  //state to change username
  const[userId, SetUserId] = useState("")
  
  //for displaying modal
  const [clickedArtwork, setClickedArtwork] = useState(null);

  // Function to handle card click and update state
  const handleCardClick = (artwork) => {
    setClickedArtwork(artwork);
    //handleShow(); // Show the modal
  };
  

  const getApprovedArtworks = async () => {
    try {
      const result = await AllArtAPI();
      const artworks = result.data;
      const approvedArtworks = artworks.filter(artwork => artwork.status === 'Approved');
      setApprovedArtworks(approvedArtworks);
    } catch (error) {
      console.error('Error fetching approved artworks:', error);
    }
  };

 
  //add to cart
  const addtoCart = async (artworkId) => {
    console.log("Current User ID:", userId);

    try {
        if (!token) {
            alert('Please log in to add items to the cart.');
            return;
        }

        const cartItem = {
            userId: userId,
            artworkId: artworkId,
        };

        const reqHeader = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        const result = await addToCartAPI(cartItem, reqHeader);

        if (result.status === 200) {
            console.log('Added to cart:', result.data);
            alert('Artwork successfully added to cart');
        } else {
            // Display a specific property or message from the response
            console.error('Error adding to cart:', result.data?.message || 'Unknown error');
            alert('Error adding to cart. Please try again.');
        }
    } catch (error) {
        // Handle error (e.g., show a user-friendly error message)
        console.error('Error adding to cart:', error.message || 'Unknown error');
        alert('Error adding to cart. Please try again.');
    }
};

//add to wishlist
const addtoWishlist = async (artworkId) => {
  console.log("Current User ID:", userId);

  try {
      if (!token) {
          alert('Please log in to add items to the wishlist.');
          return;
      }

      const wishlistItem = {
          userId: userId,
          artworkId: artworkId,
      };

      const reqHeader = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
      };

      const result = await addWishlistAPI(wishlistItem, reqHeader);

      if (result.status === 200) {
          console.log('Added to cart:', result.data);
          alert('Artwork successfully added to wishlist');
      } else {
          // Display a specific property or message from the response
          console.error('Error adding to cart:', result.data?.message || 'Unknown error');
          alert('Error adding to cart. Please try again.');
      }
  } catch (error) {
      // Handle error (e.g., show a user-friendly error message)
      console.error('Error adding to cart:', error.message || 'Unknown error');
      alert('Error adding to cart. Please try again.');
  }
};


  

  useEffect(() => {
    getApprovedArtworks();
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
      SetUserId(JSON.parse(sessionStorage.getItem("existingUser"))._id)

    } else {
      setToken("");
    }
  }, []);
  console.log(token);
  console.log(userId);

  return (
    <>
      <Header />
      <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
        <h2 className='text-warning'>Art Gallery</h2>
        <p>You can explore our artwork, and you can buy your favorite pieces.</p>
      </div>

      <Row className='mt-5 mb-5 ms-5'>
        {approvedArtworks.length > 0 ?
          approvedArtworks.map(item => (
            <Col lg={4} sm={12} md={6} className='mt-5' key={item._id}>
              <Card style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', position: 'relative'}} onClick={() => handleCardClick(item)}>
                <Card.Img variant="top" src={item ? `${BASE_URL}/uploads/${item.artImg}` : artimg} style={{ height: '300px' }}/>
                <Card.Body>
                  <Card.Title className='text-center'>{item.title}</Card.Title>
                  <Card.Text>
                    <p onClick={handleShow} className='text-warning' style={{cursor:'pointer'}}>View</p>
                    <p className='fw-bolder text-center'>₹{item.price}</p>
                  </Card.Text>
                  <div className='d-flex align-items-center justify-content-between'>
                    <Button variant="outline-warning" className='mx-auto' onClick={() => addtoWishlist(item._id)}><i class="fa-solid fa-heart"></i></Button>
                    <Button variant="outline-warning" className='mx-auto' onClick={() => addtoCart(item._id)}><i class="fa-solid fa-cart-shopping"></i></Button>

                  </div>
                </Card.Body>
              </Card>
            </Col>
          )) :
          <p>No approved artworks found.</p>
        }
      </Row>

      <Modal show={show} onHide={handleClose} size='xl'>
                <Modal.Header closeButton>
                <Modal.Title>View Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {clickedArtwork &&( <Row>
                    <Col md={8}
                    style={{
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `url(${
                          clickedArtwork ?` ${BASE_URL}/uploads/${clickedArtwork.artImg}` : artimg
                        })`,

                        minHeight: '50vh', // Add this to ensure the column takes the full height
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        
                      }}>
                    
                    </Col>
                    <Col md={4}>
                    
                    <h4 className='mt-5'>Artist: <span className='text-success'>{clickedArtwork.name}</span></h4>
                    <div className='mt-3'>
                       <h5>Category :<span className='text-warning'>{clickedArtwork.category}</span> </h5>
                     </div>
                     <h5 className='mt-3'>Price: <span className='text-danger'>${clickedArtwork.price}</span></h5>
                  
                    </Col>
                </Row>)}

                </Modal.Body>
            
            </Modal>

    </>
  );
}

export default Artwork;
