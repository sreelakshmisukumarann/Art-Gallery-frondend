// Home.js

import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import About from '../../components/About/About';
import Frame from '../../components/Frame/Frame';
import ArtCard from '../../components/ArtCard';
import Imagewrap from '../../components/Imagewrap';
import PhotoFrame from '../../components/PhotoFrame';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import { isAuthTokenContext } from '../../Contexts/ContextShare';
import Homesection from '../../components/Homesection';

const Home = () => {

  //state to store token
  const[islogin, setIslogin] = useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIslogin(sessionStorage.getItem("token"))
    }
    
  },[])
  console.log(islogin);
  return (
    <>
      <Header/>
      <div className="container" style={{ height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', position: 'relative', padding: '20px' }}>
        <div className="content" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: '1' }}>
          <p style={{fontSize:'30px'}}>Welcome to Art Gallery</p>
          <p style={{fontSize:'20px'}}>Explore a world of creativity and inspiration</p>
          {islogin?
          <button className="explore-btn" ><Link to={'/artwork'} style={{textDecoration:'none'}}>Explore now</Link></button>:
          <p><button className="explore-btn" ><Link to={'/artwork'} style={{textDecoration:'none'}}>Explore now</Link></button></p>}
        </div>
        <img src="https://images.pexels.com/photos/3252516/pexels-photo-3252516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Main Image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginTop: '20px' }} />
      </div>

      <About/>
      <Frame/>
      <ArtCard/>
      <Imagewrap/>
      <Homesection/>
      
      <Footer/>
      {/* <PhotoFrame/> */}
    
    </>
  );
};

export default Home;
