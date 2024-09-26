// import { useState } from "react"
import "./App.css"   
// import React, {useState} from 'react'; 


const UserProfile = (props)=>{   
   const {onDelete,users} = props 
   const {name,role,imageUrl,uniqueNo} = users 

   const deleteBtn = ()=>{
      onDelete(uniqueNo)
   }
   return (
      <div>
          <h1>Hello Good Afternoon</h1> 
          <li>
           <h1>{name}</h1> 
           <p>{role}</p> 
           <img src={imageUrl} alt="imnage_url"/> 

           <button onClick={deleteBtn}>Delete</button>
          </li>
      </div>
   )
}
export default UserProfile