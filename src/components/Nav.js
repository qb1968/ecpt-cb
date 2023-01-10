import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  
} from './NavbarElements.js'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

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
       <Nav>
        
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/products' activeStyle>
            Products
          </NavLink>
          <NavLink to='/forms' activeStyle>
            Forms
          </NavLink>
          <NavLink to='/testimonials' activeStyle>
            Testimonials
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          </NavMenu>
          </Nav>
       
    </>
  );
}

export default Nav1;