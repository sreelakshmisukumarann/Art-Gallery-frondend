import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCartAPI, addToCartFromWishlistAPI, deleteWishlistAPI, getWishlistAPI } from '../services/allAPI';
import Header from '../components/Header/Header';
import img from '../assests/imgcow.webp'
import { BASE_URL } from '../services/baseurl';

function Wishlist() {
    const [isLiked, setLiked] = useState(false);

   
    const [data, Setdata] = useState([])
    
    const [token, setToken] = useState("");
    const[userId, SetUserId] = useState("")
    

  const handleLikeClick = () => {
    setLiked(!isLiked);
  };

//get wishlist
  const getwishlist = async()=>{
    const token = sessionStorage.getItem("token")
    console.log(token);

    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result = await getWishlistAPI(reqHeader)
    console.log(result.data.wishlist);
    Setdata(result.data.wishlist)
  }

  //delete wishlist
  const handleDelete = async(id)=>{

    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
  }
  const result = await deleteWishlistAPI(id,reqHeader)
  console.log(result);

  if(result.status===200){
    getwishlist()
  }
  else{
    alert(result.response.data)
  }
  }

  //add to cart from wishlist
  //add to cart
  const addCart = async (id) => {
 const token = sessionStorage.getItem("token");
  const reqHeader = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  try {
    // Add the item to the cart collection
    // You may need to replace 'addToCartAPI' with the actual API endpoint for adding items to the cart
    const addToCartResult = await addToCartAPI(id, reqHeader);
    console.log(addToCartResult);

    // Delete the item from the wishlist collection
    const deleteWishlistResult = await deleteWishlistAPI(id, reqHeader);
    console.log(deleteWishlistResult);

    if (deleteWishlistResult.status === 200) {
      getwishlist(); // Refresh the wishlist after successful deletion
    } else {
      alert(deleteWishlistResult.response.data);
    }
  } catch (error) {
    console.error("Error handling wishlist item deletion and cart addition:", error);
  }
  };
  

  useEffect(()=>{
    getwishlist()
  },[])

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
    <div>
      <Header/>
      <div>
        <h3 className='mt-5 text-warning'>Your WishList</h3>
        <h5>Desires Unwrapped: My Wishlist Wonders 🌟</h5>
      </div>
      
        <Row className='ms-5 me-3 mt-5'>
            {data?.length>0?
            data.map((item)=>(<Col style={{marginTop:'150px'}} className='mb-5' sm={12} md={6} lg={4}>
            <Card style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', position: 'relative' }} >
        

        <Card.Img variant="top" src={item ? `${BASE_URL}/uploads/${item.image}` : img} style={{ height: '300px' }} />
        <Card.Body>
          <Card.Title className='text-center'>{item.title}</Card.Title>
          <Card.Text>
            <p>By <span className='text-warning'>{item.name}</span></p>
            <p className='fw-bolder text-center'>₹{item.price}</p>
          </Card.Text>
          <div className='d-flex align-items-center justify-content-between'>
          <Button variant="outline-warning" className='mx-auto' ><i className="fa-solid fa-cart-shopping" onClick={() => addCart(item._id)}></i></Button>
          <Button variant="outline-warning" className='mx-auto' ><i className="fa-solid fa-trash" onClick={()=>handleDelete(item._id)}></i></Button>

          </div>
        </Card.Body>
      </Card>
            </Col>)):<div><h5 className='text-success'>Wishlist is empty</h5>
            <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/panier_vide.gif" alt="" width={300} /></div>
            }

        </Row>
    </div>
  )
}

export default Wishlist