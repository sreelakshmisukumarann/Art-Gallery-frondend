import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { AllProfileAPI, oneProfileAPI, specificArtistworkAPI } from '../../services/allAPI';
import artimg from '../assests/istockphoto-478065559-1024x1024.jpg'
import { BASE_URL } from '../../services/baseurl';
import proimg from '../assests/loginimg.png'


function ArtistDashboard() {
  //give role 
  const [userRole, setUserRole] = useState("");

  //change art work value
  const [work, SetWork] = useState([])


   //state to store token
   const[islogin, setIslogin] = useState(false)

   //state to change username
   const[username, SetUsername] = useState("")

   //state to change profile info
   const [profileinfo, setProfileInfo] = useState([])
   

   useEffect(()=>{
     if(sessionStorage.getItem("token")){
       setIslogin(sessionStorage.getItem("token"))
       SetUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
     }
     
   },[])
   console.log(islogin);
   console.log(username);
 

  useEffect(() => {
    const userFromStorage = JSON.parse(sessionStorage.getItem("existingUser"));

    if (userFromStorage && userFromStorage.role) {
      setUserRole(userFromStorage.role);
    }
  }, []);

  const isArtist = userRole === "artist";

  const getArtWork = async()=>{
    const token = sessionStorage.getItem("token")
    console.log(token);

    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result = await specificArtistworkAPI(reqHeader)
    console.log(result.data);
    SetWork(result.data)
  }

  useEffect(()=>{
    getArtWork()
  },[])


  const getProfile = async()=>{
    const token = sessionStorage.getItem("token")
    console.log(token);

    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result = await oneProfileAPI(reqHeader)
    console.log(result.data);
    setProfileInfo(result.data)
  }

  useEffect(()=>{
    getProfile()
  },[])

  useEffect(() => {
    console.log("Before setting profileinfo:", profileinfo);
    getProfile();
  }, []);
  
  useEffect(() => {
    console.log("After setting profileinfo:", profileinfo);
  }, [profileinfo]);

  return (
    <>
      <Row>
        <Row>
          <div className="card">
            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
              <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                <img
                  src={profileinfo.length > 0 ? `${BASE_URL}/profileuploads/${profileinfo[0].profileImg}` : proimg}
                  alt="Generic placeholder image"
                  className="img-fluid img-thumbnail mt-4 mb-2"
                  style={{ width: '150px', zIndex: 1 }}
                />
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  data-mdb-ripple-color="dark"
                  style={{ zIndex: 1 }}
                >
                  <Link to={'/add-profiledetails'} style={{textDecoration:'none'}}>Add profile</Link>
                </button>
              </div>
              <div className="ms-3" style={{ marginTop: '130px' }}>
                {islogin?<h5>{username}</h5>:<p>Please login</p>}
                {profileinfo?.length>0?
                profileinfo.map((item)=>(<p>{item.place}</p>)):<p>Add info</p>}
              </div>
            </div>
            <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="d-flex justify-content-end text-center py-1">
                <ul style={{ listStyleType: 'none' }}>
                  {isArtist && (
                    <Link to={'/addwork '}>
                      <li style={{ display: 'inline-block' }}><h4 className='text-warning'>Add Work</h4></li>
                    </Link>
                  )}
                  <Link to={'/'}>
                    <li style={{ display: 'inline-block' }} className='ms-5'>
                     <h4 className='text-warning'> Home</h4>
                    </li>
                  </Link>
                  <Link to={'/wishlist'}>
                    <li style={{ display: 'inline-block' }} className='ms-5'>
                      <i className="fa-regular fa-heart fa-1x text-warning"></i>
                    </li>
                  </Link>
                  <Link to={'/cart'}>
                    <li style={{ display: 'inline-block' }} className='ms-5'>
                      <i className="fa-solid fa-cart-shopping fa-1x text-warning"></i>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="card-body p-4 text-black">
              <div className="mb-5">
                <h5 className="lead fw-normal mb-1 text-warning">ABOUT</h5>
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  {profileinfo?.length>0?
                  profileinfo.map((item)=>(<p className="font-italic mb-1">
                  {item.about}
                </p>)):<p>Add about info</p>}
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                {isArtist?<p className="lead fw-normal mb-0">My Work</p>:null}
              
              </div>
              {isArtist ? (
            <Row>
              {work?.length > 0 ? (
                work.map((item) => (
                  <Col xs={6} md={4} key={item._id} className='mt-5'>
      <div style={{ position: 'relative' }}>
        <Image
          src={`${BASE_URL}/uploads/${item.artImg}`}
          alt={item.title}
          rounded
          height={400}
          width={320}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
            padding: '10px', // Adjust the padding as needed
          }}
        >
          <h5><span className="badge bg-light pt-2 ms-3 mt-3 text-dark">{item.status}</span></h5>
        </div>
      </div>
    </Col>
                ))
              ) : (
                <p>No work uploaded yet</p>
              )}
            </Row>
          ) : (
           null
          )}
            </div>
          </div>
        </Row>
      </Row>
    </>
  );
}

export default ArtistDashboard;
