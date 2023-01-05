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
       <div className='mine'>
       <img class="image" src={myLogo} alt=""></img>
       <img class= "award" src={Logo} alt=""/>

       </div>
       <Nav>
        <Bars />
  
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
       {/* <Navbar  >
      
       
          <Nav className="me-auto" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href='/services'>Services</Nav.Link>
            
            <Nav.Link href='/products'>Products</Nav.Link>
            <Nav.Link href='/forms'>Patient Forms</Nav.Link>
             
            
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            
          </Nav>
        
      
    </Navbar> */}
    </>
  );
}

export default Nav1;