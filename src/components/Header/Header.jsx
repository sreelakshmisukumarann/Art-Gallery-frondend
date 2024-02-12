import React, { useContext, useEffect, useState } from 'react';
import logo from '../assests/logo.png';
import { Link, json, useLocation, useNavigate } from 'react-router-dom'; // Import useLocation
import './Header.css';
import { Button, Dropdown } from 'react-bootstrap';
import { isAuthTokenContext } from '../../Contexts/ContextShare';

function Header() {
  const location = useLocation(); // Get the current location using useLocation()

  const {isAuthToken, setIsAuthToken} = useContext(isAuthTokenContext)


  //state to store token
  const[islogin, setIslogin] = useState(false)

  //state to change username
  const[username, SetUsername] = useState("")

  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('existingUser');
    setIslogin(false);
    navigate('/'); // Redirect to the login page after logout
  };

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setIslogin(true);
      SetUsername(JSON.parse(sessionStorage.getItem('existingUser')).username);
    }
  }, []);

  console.log(islogin);
  console.log(username);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} width="30" height="30" alt="Your Logo" className='ms-5'/>
        <span className="ml-2">Artnook</span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          {/* <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link className="nav-link" to="/contact">Contact</Link>
          </li> */}
          <li className={`nav-item ${location.pathname === '/artwork' ? 'active' : ''}`}>
            <Link className="nav-link" to="/artwork">Artwork</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/artist' ? 'active' : ''}`}>
            <Link className="nav-link" to="/artist">Artist</Link>
          </li>
        </ul>
      </div>
      {islogin?
      <div className="navbar-nav ml-auto">
        <Dropdown>
          <Dropdown.Toggle variant="link" id="dropdown-basic" style={{textDecoration:'none',color:'orange'}}>
            {username}
          </Dropdown.Toggle>

          <Dropdown.Menu className=''>
            <Dropdown.Item href="/artist-dashboard" className='text-warning'><b>Profile</b></Dropdown.Item>
            <Dropdown.Item  className='text-warning'><Button className='btn btn-warning' onClick={handleLogout}>Logout</Button></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>:
     <div className="navbar-nav ml-auto">
     <Link className="nav-link" to="/login">Login</Link>
     </div>}
      {islogin?<div className="navbar-nav ml-3">
        <Link className="nav-link" to="/cart">
          <i className="fas fa-shopping-cart"></i>
        </Link>
        <Link className="nav-link me-5" to="/wishlist">
          <i className="fas fa-heart"></i>
        </Link>
      </div>:<div className="navbar-nav ml-3">
        <Link className="nav-link">
          <i className="fas fa-shopping-cart"></i>
        </Link>
        <Link className="nav-link me-5">
          <i className="fas fa-heart"></i>
        </Link>
      </div>}
    </nav>
  );
}

export default Header;


