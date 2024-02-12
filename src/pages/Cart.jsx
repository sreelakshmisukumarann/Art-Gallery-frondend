import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { checkoutAPI, deleteCartAPI, getCartAPI } from '../services/allAPI';
import img from '../assests/imgcow.webp'
import { BASE_URL } from '../services/baseurl';
import Header from '../components/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import EditDelivery from '../components/EditDelivery';


function Cart() {
    const [isLiked, setLiked] = useState(false);
    const [data, Setdata] = useState([])

    const [total,setTotal] = useState(0)
    const navigate = useNavigate()


  const handleLikeClick = () => {
    setLiked(!isLiked);
  };

      //function to calculate total
  const gettotal=()=>
  {
    const totalprice=data.map((item)=>item.price).reduce((n1,n2)=>n1+n2,0);
    setTotal(totalprice)
  }

const initializeRazorpay = async () => {
  try {
    const options = {
      key: "rzp_test_sqitqSm9YPdGnS",
      amount: Math.round(total * 100),
      currency: "INR",
      name: "ArtNook",
      description: "For testing purpose",
      handler: function (response) {
        // Handle successful payment here
        console.log('Payment successful and go for shopping:', response);

        // Call checkoutAPI to remove items from the cart
        checkoutAPI({
          "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
        })
          .then(() => {
            // Navigate to the /artwork page after successful checkout
            navigate('/artwork');
          })
          .catch((error) => {
            console.error('Error during checkout:', error);
            // Handle checkout error as needed
          });
      },
      prefill: {
        name: "ArtNook",
        email: "artnook@gmail.com",
        contact: "9207799496",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  } catch (error) {
    console.error('Error during Razorpay initialization:', error);
    // Handle error as needed
  }
};



      //for item quantity
      const [quantity, setQuantity] = useState(1);

      const handleIncrement = () => {
        setQuantity(quantity + 1);
      };
    
      const handleDecrement = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };
    

  const getCart = async()=>{
    const token = sessionStorage.getItem("token")
    console.log(token);

    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result = await getCartAPI(reqHeader)
    console.log(result.data.carts);
    Setdata(result.data.carts)
  }


  //delete cartitems
  const handleDelete = async(id)=>{

    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
  }
  const result = await deleteCartAPI(id,reqHeader)
  console.log(result);

  if(result.status===200){
    getCart()
  }
  else{
    alert(result.response.data)
  }
  }

  useEffect(()=>{
    getCart()
  },[])

  useEffect(()=>{
    gettotal()
  },[data])

  return (
    <div>
      <Header/>
    

<section className="h-100" style={{ backgroundColor: "#eee" }}>
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
          {/* <div>
            <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i
              className="fas fa-angle-down mt-1"></i></a></p>
          </div> */}
        </div>

       {data?.length>0? 
       data.map((item)=>(<div className="card rounded-3 mb-4">
       <div className="card-body p-4">
         <div className="row d-flex justify-content-between align-items-center">
           <div className="col-md-2 col-lg-2 col-xl-2">
             <img
               src={item ? `${BASE_URL}/uploads/${item.image}` : img}
               className="img-fluid rounded-3" alt="Artimage" height={100} width={120}  />
           </div>
           <div className="col-md-3 col-lg-3 col-xl-3">
             <p className="lead fw-normal mb-2">{item.title}</p>
             <p><span className="text-muted">By </span>{item.artistName}</p>
           </div>
           <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
             <button className="btn btn-link px-2"
               onClick={handleDecrement}>
               <i className="fas fa-minus"></i>
             </button>

             <button className="btn btn-link px-2">
               {quantity}
             </button>

             <button className="btn btn-link px-2"
               onClick={handleIncrement}>
               <i className="fas fa-plus"></i>
             </button>
           </div>
           <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
             <h5 className="mb-0">${item.price}</h5>
           </div>
           <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          <i className="fas fa-trash fa-lg text-danger" onClick={()=>handleDelete(item._id)}></i>
           </div>
         </div>
       </div>
     </div>)):<div><h5 className='text-warning'>Cart is empty</h5>
            <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/panier_vide.gif" alt="" width={300} /></div>}

        {/* Repeat the card sections as needed */}

        <div className="card mb-4">
          <div className="card-body p-4 d-flex flex-row">
            <div className="form-outline flex-fill">
              {/* <input type="text" id="form1" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="form1">Discount code</label> */}
              <h3>Total Price : ${total}</h3>
            </div>
           <Link to={'/checkout'}><button type="button" className="btn btn-outline-warning  ms-3">Add Delivery Details</button></Link>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <button type="button" className="btn btn-warning btn-block" onClick={initializeRazorpay}>Proceed to Pay</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

</div>
  )
}

export default Cart