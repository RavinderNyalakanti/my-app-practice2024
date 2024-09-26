import { useEffect, useState } from 'react'
import UserProfil from '../UserProfile' 
import Navbar from './Navbar';
// import { json } from 'react-router-dom';

const userDetailsList = [
    {
      uniqueNo: 1,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
      name: 'Esther Howard',
      role: 'Software Developer'
    },
    {
      uniqueNo: 2,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
      name: 'Floyd Miles',
      role: 'Software Developer'
    },
    {
      uniqueNo: 3,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
      name: 'Jacob Jones',
      role: 'Software Developer'
    },
    {
      uniqueNo: 4,
      imageUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iplt20.com%2Fteams%2Fchennai-super-kings%2Fsquad-details%2F1&psig=AOvVaw1xZK-yKp1BF3yVG0cf4-LI&ust=1713614443397000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDSm7OdzoUDFQAAAAAdAAAAABAE',
      name: 'Devon Lane',
      role: 'Software Developer'
    }
  ]
const Home =()=>{ 
      const [search,setSearch] = useState(""); 
      const [newUser,setNewUser] = useState(userDetailsList); 
      const [randomNumbers, setRandomNumbers] = useState(0); 

      const onChangeRes = (event)=>{
        setSearch(event.target.value);
      }  
      

      const onDelete = uniqueNo=>{
          const filterData = newUser.filter((eachUser)=>(
               eachUser.uniqueNo !== uniqueNo
          ))
          setNewUser(filterData)
      } 

      const searchRes = newUser.filter((res)=>(
          res.name.toLowerCase().includes(search.toLowerCase())
      )) 

      
      const randomBtn = ()=>{
          const resBtn = Math.ceil(Math.random()*100) 
          setRandomNumbers(resBtn)
      } 
      const [movieData,setMovies] = useState([])


   useEffect(()=>{
        const fetchData = async()=>{
             
             try {
              const data = await fetch('https://credenceanalyticsbackendapi2024-1.onrender.com/movies');  
              if (!data){
                throw new Error("fetching failed");
              } 
              const jsonData = await data.json(); 
              setMovies(jsonData)
             } catch (error) {
                  console.error("error when fetching the data",error)
             }
        } 
        fetchData();
   },[]) 

    return(
        <div> 
          <Navbar/>
          <h1>Hello New User's Good Afternoon</h1> 
          <button onClick={randomBtn}>Random Numbers</button>  
          <p>{randomNumbers}</p>
          <input type='search' value={search} onChange={onChangeRes}/> 

          {
            searchRes.map((each)=>(
                <UserProfil key={each.uniqueNo} onDelete={onDelete} users={each}/>
            ))
          } 
          {
            movieData.map((data)=>(
                <li>
                  <h1>{data.name}</h1> 
                  <img src={data.img} alt='i'/>
                  <p>{data.summary}</p>
                </li>
            ))
          }
        </div>
    )
} 
export default Home