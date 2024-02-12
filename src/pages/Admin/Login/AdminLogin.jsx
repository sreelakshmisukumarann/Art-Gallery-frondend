import React, { useState } from 'react'
import './Adminlogin.css'
import { adminLoginAPI } from '../../../services/allAPI';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {

  const navigate = useNavigate()
  const [data, Setdata] = useState({
    email:"",
    password:""
  })
  console.log(data);

  

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const { email, password } = data;
  
    if (!email || !password) {
      alert('Please fill in the form completely');
    } else {
      try {
        const result = await adminLoginAPI(data);
  
        if (result.status === 200) {
          alert('Login successful');
  
          sessionStorage.setItem("token", result.data.token);
          console.log("token");
          Setdata({
            email: "",
            password: "",
          });
          // Navigate to admin
          navigate('/admin-dashboard');
        } else {
          alert('Not an Authorized user');
        }
      } catch (error) {
        console.error('Error during login:', error);
        // Handle other possible errors
      }
    }
  };
  
  return (
    
      <div className='loginb'>
        <div className="loginBox">
        <img className="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px" alt="User" />
        <h3 style={{color:"#0000ff"}}>Admin Login</h3>
        <form action="login.php" method="post">
          <div className="inputBox">
            <input id="uname" type="email" name="email" placeholder="Email" value={data.email} onChange={(e)=>Setdata({...data,email:e.target.value})}/>
            <input id="pass" type="password" name="Password" placeholder="Password" value={data.password} onChange={(e)=>Setdata({...data,password:e.target.value})} />
          </div>
          <input type="submit" value="Login" onClick={handleLogin} />
        </form>
        
        
      </div>
      </div>
    
  )
}

export default AdminLogin