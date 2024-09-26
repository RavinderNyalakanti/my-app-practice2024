import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

const MyComponent = () => {
  const [, setData] = useState(null);
  const [searchVal, setSearchVal] = useState(""); 
  const [searchUserVal, setSearchUserVal] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setSearchUserVal(jsonData); // Set searchUserVal after fetching data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after component mount 

  const onChangeBtn = event => {
    setSearchVal(event.target.value);
  } 

  const onDelete = id => {
    const filterData = searchUserVal.filter(e => e.id !== id);
    setSearchUserVal(filterData);
  } 

  const serRes = searchUserVal.filter(a => a.name.toLowerCase().includes(searchVal.toLowerCase())); 
  

  return (
    <div> 
      <Navbar/>
      <h1>Users</h1> 
      <input type='search' value={searchVal} onChange={onChangeBtn}/>
      <ul>
        {serRes.map(user => (
          <li key={user.id}>
            <h1>Name: {user.name}</h1> 
            <p>Username: {user.username}</p> 
            <p>Email: {user.email}</p> 
            <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
