/* eslint-disable jsx-a11y/alt-text */
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
// import React, { useState } from 'react';
import './App.css';  
import Home from './components/Home';
import MyComponent from './MyComponent';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard'; 
import Game from './components/Game';
import PasswordManager from './components/PasswordManager';
import { LockUnlock } from './components/LockUnlock';
import CreditCard from './components/CreditCard';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import Todo from './components/Todo';
import Popular from './components/Popular';
// import Login from './Login'
 
function App() { 
 
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} /> 

        <Route path='/mycomponent' element={<MyComponent/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/notfound' element={<NotFound/>}/>
        <Route path='/navbar' element={<Navbar/>}/> 
        <Route path='/dashboard' element={<Dashboard/>}/>  
        <Route path='/game' element={<Game/>}/>  
        <Route path='/password-manager' element={<PasswordManager/>}/>   
        <Route path='/register' element={<RegistrationPage/>}/>
        <Route path='/lock-unlock' element={<LockUnlock/>}/>  
        <Route path='/credit-card' element={<CreditCard/>}/>  
        <Route path='/todo' element={<Todo/>}/>  
        <Route path='/pop' element={<Popular/>}/>  
      </Routes>
    </Router> 
   
    
    </div>
  );


  }

export default App;
