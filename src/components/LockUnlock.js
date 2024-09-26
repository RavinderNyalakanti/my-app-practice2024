import React, { useState } from 'react' 
import { FaLockOpen } from "react-icons/fa"; 
import { FaLock } from "react-icons/fa";
import Navbar from './Navbar';

export const LockUnlock = () => { 
    const [isLocked,setIsLocked] = useState(true)  
    const [isRead,setIsRead] = useState(true)  
     
    const handleReadMore = ()=>{
        setIsRead(false)
    } 

    const handleRead = ()=>{
        setIsRead(true)
    }

   const handleUnlock = ()=>{
       setIsLocked(false)
   }
   const handleLock = ()=>{
       setIsLocked(true)
   }
  return (
    <div> 
         <Navbar/>
        {
            isLocked? <FaLockOpen/>: <FaLock/>
        }   
        <p>
            {
                isLocked? 'lock':"unlocked"
            }
        </p> 
        {isLocked ? (
        <button onClick={handleUnlock}>Unlock</button>
      ) : (
        <button onClick={handleLock}>Lock</button>
      )} 
      <div>
         {
          isRead? (<p>The Indian Premier League, also known as the TATA IPL for sponsorship reasons, is a men's Twenty20 cricket league held annually in India.</p>) :(<p>
            The Indian Premier League, also known as the TATA IPL for sponsorship reasons, is a men's Twenty20 cricket league held annually in India. Founded by the BCCI in 2007, the league features ten city-based franchise teams. The IPL usually takes place during the summer, between March and May each year.
          </p>)
         } 
          {
            isRead?(
              <button onClick={handleReadMore}>
                      ReadMore
              </button>
            ): (
              <button onClick={handleRead}>
                 Read
              </button>
            )
          }
      </div>
        </div>
  )
}
