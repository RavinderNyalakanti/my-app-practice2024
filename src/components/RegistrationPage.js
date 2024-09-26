import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import '../components/com.css'

const RegistrationPage = () => {
  const navigate = useNavigate(); 
  const [showPassword, setShowPassoword] = useState(false) 

  const handleShowPassword = ()=>{
        setShowPassoword(!showPassword)
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://sky-goal-tech.onrender.com/api/auth/signup', formData);
      alert('Registration successful!');
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className='reg-card-container'>
      <h2>Registration</h2>
      <form className='reg-form-car-container' onSubmit={handleSubmit}>
        <input  style={{marginBottom:'20px',width:'300px'}} type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input  style={{marginBottom:'20px',width:'300px'}} type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input  style={{width:'300px'}} type={!showPassword?'text':'password'} name="password" placeholder="Password" value={formData.password} onChange={handleChange} required /> 
          <div style={{marginTop:'8px',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <input type='checkbox' id='showPassword' checked={showPassword} onChange={handleShowPassword}/> 
            <label htmlFor='showPassword'>show password
            </label>
          </div>
          <Link style={{color:'blue'}} to='/login'> 
             <p> Alreadt Have An Account?</p>
          </Link>
        <button type="submit" style={{color:'white',backgroundColor:'#095e96',width:'100px'}}>Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
