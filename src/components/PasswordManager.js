import React,{useState} from 'react'
import Navbar from './Navbar';

const PasswordManager = () => { 
    const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleInput = event=>{
     const value = event.target.value; 
     setInputValue(value) 

     if (value.trim().length>0 && value.trim().length<8){
           setErrorMessage('Value must be at least eight characters long')
     } 
     else{
        setErrorMessage('');
     }
  }
  return (
    <div><Navbar/>
       <div>
       <input type='text' 
        value={inputValue} onChange={handleInput} placeholder='enter a value'/> 
        <p style={{color:'red'}}>
            {errorMessage}
        </p>
       </div>
       
    </div>
  )
}

export default PasswordManager