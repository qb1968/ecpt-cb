import React from 'react'
import { Link } from 'react-router-dom'
import myLogo from '../assets/logo.jpg'
import Logo from '../assets/winner.jpeg'


const Nav1 = () => {
  return (
    <>
       <div className='mine0'>
        <h1 className="welcome">Welcome to</h1>
       </div>
       <div className='mine'>
       
       <img class="image" src={myLogo} alt=""></img>
       <img class= "award" src={Logo} alt=""/>

       </div>
      
       <div className='nav'>
        
  
       
          <Link className='links' to='/' >
            Home
          </Link>
          <Link className='links' to='/about' >
            About
          </Link>
          <Link className='links' to='/services' >
            Services
          </Link>
          <Link className='links' to='/products' >
            Products
          </Link>
          <Link className='links' to='/forms' >
            Forms
          </Link>
          <Link className='links' to='/testimonials' >
            Testimonials
          </Link>
          <Link className='links' to='/contact' >
            Contact
          </Link>
          
          
       </div>
    </>
  );
}

export default Nav1;