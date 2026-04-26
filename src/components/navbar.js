import React from 'react';
// import about from './about.js';
import { Link } from "react-router-dom";
function Navbar() {
    return (
        
        <div  >
        
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/info">signup</Link> 
            </li>
           
          </ul>
   

       
      </div>
        
        
    
    )}

export default Navbar;

