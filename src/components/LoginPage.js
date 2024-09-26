import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios'; 
import '../components/com.css'

const LoginPage = () => {
  const navigate = useNavigate(); 
  const [showPass,setShowpass] = useState(false)  

  const handlePass = ()=>{
        setShowpass(!showPass)
  }
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://sky-goal-tech.onrender.com/api/auth/login', formData);
      const token = response.data.token;
      localStorage.setItem('token', token);
      alert('Login successful!');
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className='login-card-container'>
      <h2 style={{fontFamily:'sans-serif',color:'#095e96'}}>Login</h2>
      <form className='login-form-card-container' onSubmit={handleSubmit}>
        <input style={{marginBottom:'20px',width:'300px'}} type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input style={{width:'300px'}}  type={showPass? 'text':'password'} name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />   

        <div style={{marginTop:'8px',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <input type='checkbox' id='showPass' checked={showPass}   onChange={handlePass}/> 
          <label htmlFor='showPass'>show password</label>
        </div>
        <Link style={{color:'blue'}} to='/register'> 
             <p> I Dont' Have  An Account?</p>
          </Link>
        <button type="submit" style={{color:'white',backgroundColor:'#095e96',width:'100px'}}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
