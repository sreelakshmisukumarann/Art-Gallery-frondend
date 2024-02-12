// LoginRegister.js
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi, registerApi } from '../services/allAPI';

function LoginRegister({ register }) {
  const [userdata, SetUserdata] = useState({
    username: "",
    email: "",
    password: "",
    role: "user", // Default role value
  });

  const navigate = useNavigate();

  const registerForm = register ? true : false;

  const handleRoleChange = (e) => {
    SetUserdata({ ...userdata, role: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { username, email, password, role } = userdata;

    if (!username || !email || !password || !role) {
      alert('Please fill in the form completely');
    } else {
      const result = await registerApi(userdata);

      if (result.status === 200) {
        alert(`${result.data.username} is successfully added`);
        SetUserdata({
          username: "",
          email: "",
          password: "",
          role: "user",
        });
        // Move to login page
        navigate('/login');
      } else {
        alert(result.response.data);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = userdata;

    if (!email || !password) {
      alert('Please fill in the form completely');
    } else {
      const result = await loginApi(userdata);

      if (result.status === 200) {
        alert('Login successful');

        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser));
        sessionStorage.setItem("token", result.data.token);
        SetUserdata({
          username: "",
          email: "",
          password: "",
        });
        //naviage to home
        navigate('/');

        // const role = result.data.existingUser.role;

        // if (role === 'artist') {
        //   // Redirect to the artist dashboard
        //   navigate('/artist-dashboard');
        // } else {
        //   // Redirect to the regular user dashboard or home page
        //   navigate('/');
        // }
      } 
      else {
        alert(result.response.data);
      }
    }
  };

  return (
    <div>
      <div style={{ width: '100%', height: '100vh', background: '#eaddf4' }} className='d-flex justify-content-center align-items-center'>
        <div className='container w-75 p-5'>
          <div className='' style={{ backgroundColor: 'white' }}>
            <Row>
              <Col sm={12} md={6} style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url("https://cdn.pixabay.com/photo/2021/11/01/14/12/woman-6760524_1280.jpg")`,
                minHeight: '50vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                {/* Add content for the left side if needed */}
              </Col>

              <Col sm={12} md={6}>
                {registerForm ? <h1 className='text-align-center mt-5' style={{ color: 'orange' }}>Register</h1> :
                  <h1 className='text-align-center mt-5' style={{ color: 'orange' }}>Login</h1>}
                <Form className='mt-5'>
                  {registerForm &&
                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                      <Form.Control type="text" placeholder="Username" style={{ width: '300px' }}
                        value={userdata.username} onChange={(e) => SetUserdata({ ...userdata, username: e.target.value })} />
                    </Form.Group>
                  }
                  <Form.Group className="mb-3" controlId="formPlaintextPassword">
                    <Form.Control type="email" placeholder="Email Id" style={{ width: '300px' }}
                      value={userdata.email} onChange={(e) => SetUserdata({ ...userdata, email: e.target.value })} />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formPlaintextPassword">
                    <Form.Control type="password" placeholder="Password" style={{ width: '300px' }}
                      value={userdata.password} onChange={(e) => SetUserdata({ ...userdata, password: e.target.value })} />
                  </Form.Group>

                  {registerForm ?
                    <div>
                      <label htmlFor="role">I am a:</label>
                      <select id="role" name="role" required onChange={handleRoleChange} value={userdata.role}>
                        <option value="user">Regular User</option>
                        <option value="artist">Artist</option>
                      </select>
                      <div className='mt-4'>
                        <Button variant="warning" onClick={handleRegister}>Register</Button>
                        <Link to={'/'}><Button variant="warning ms-5">Back</Button></Link>
                        <p className='mt-2'>Already a User? Click here to <Link to={'/login'} style={{ color: 'orange', textDecoration: 'none' }}>Login</Link></p>
                      </div>
                    </div> :
                    <div className='mt-2'>
                      <Button onClick={handleLogin} variant="warning">Login</Button>
                      <Link to={'/'}><Button variant="warning ms-5">Back</Button></Link>
                      <p className='mt-2'>New User? Click here to <Link to={'/register'} style={{ color: 'orange', textDecoration: 'none' }}>Register</Link></p>
                    </div>
                  }
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
