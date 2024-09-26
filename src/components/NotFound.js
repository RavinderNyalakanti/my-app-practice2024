
import React,{useState} from 'react' 
import {Table} from 'react-bootstrap'; 
// import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar' 
import '../components/com.css'

const NotFound = () => {  
  const [name,setName] = useState(''); 
  const [amount,setAmount] = useState(''); 
  // const [total,setTotal] = useState(0); 
  const [submission, setSubmissions] = useState([]); 

  const handleSubmit = (e)=>{
     e.preventDefault(); 
     const amountNumber = parseFloat(amount);

     if (!isNaN(amountNumber)){
          // setTotal(prevTotal=>prevTotal+amountNumber); 
          setSubmissions([...submission,{name,amount}])
     } 

     setName(''); 
     setAmount('');
  }

  return (
    <div> 
      <Navbar/>
      {/* <h1>
      NotFound 404
      </h1>  */}
      <div> 
        <form className='' onSubmit={handleSubmit}>
           <label>
             Name: <input type='text'  onChange={(e)=>setName(e.target.value)}/>
           </label> 
           <label>
               Amount : <input type='number' onChange={(e)=>setAmount(e.target.value)}/>
           </label> 
           <button type='submit'>Submit</button>
        </form> 
        
            {/* <h2>total Amount : {total}</h2>  */}
        <Table className='table-card-container' striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {submission.map((sub, index) => (
            <tr key={index}>
              <td>{sub.name}</td>
              <td>{sub.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
     
    </div>
        

      </div>
  )
}

export default NotFound