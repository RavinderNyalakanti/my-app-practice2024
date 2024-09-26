import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button'; 
import { RiLogoutCircleRLine } from "react-icons/ri";
import './com.css';

const Navbar = () => {
  const [state, setState] = useState({
    left: false,
  });

  // const [fromLocation, setFromLocation] = useState('');
  // const [toLocation, setToLocation] = useState('');

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 180,
        backgroundColor: 'white',
        padding: '16px',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ul className="box-elements">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/notfound" className="hover:text-gray-300">
            Not Found
          </Link>
        </li>
        <li>
          <Link to="/mycomponent" className="hover:text-gray-300">
            MyComponent
          </Link>
        </li>
        <li> 

          <Link to="/password-manager" className="hover:text-gray-300">
            Password
          </Link>
        </li> 

        <li>
          <Link to="/lock-unlock" className="hover:text-gray-300">
            Lock&Unlock
          </Link>
           </li>
      </ul>
    </Box>
  );

  return (
    <div className="nav-card-container">
      <div className='burger-component-card-container'>
        <div className="burger-card-icon">
          <Button onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </Button>
        </div>

        <Drawer anchor="left" open={state.left} onClose={toggleDrawer('left', false)}>
          {list('left')}
        </Drawer>
      </div>
      <ul className="child-elements ">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/notfound" className="hover:text-gray-300">
            Not Found
          </Link>
        </li>

          <li>
          <Link to="/mycomponent" className="hover:text-gray-300">
            MyComponent
          </Link> 
          </li>
         
           <li>
           <Link to="/game" className="hover:text-gray-300">
           Game
          </Link> 
           </li>
          
          <li>
          <Link to="/password-manager" className="hover:text-gray-300">
            Password
          </Link>
           </li> 

          <li>
          <Link to="/lock-unlock" className="hover:text-gray-300">
            Lock&Unlock
          </Link>
           </li> 

          <li>
          <Link to="/credit-card" className="hover:text-gray-300">
           CreditCard
          </Link>
           </li>
      </ul>  
       
      <div > 
        <Link to='/register' className='logout-card'> 
        <span style={{marginRight:"5px"}}>Logout</span> 
         <RiLogoutCircleRLine />
        </Link>
        
       </div>
     

    </div>
  );
};

export default Navbar;
