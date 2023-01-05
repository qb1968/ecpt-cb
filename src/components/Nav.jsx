import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import myLogo from '../assets/logo.jpg'
import Logo from '../assets/winner.jpeg'


const Nav1 = () => {
  return (
    <>
       <div className='mine'>
       <img class="image" src={myLogo} alt=""></img>
       <img class= "award" src={Logo} alt=""/>

       </div>
       <Navbar  >
      
       
          <Nav className="me-auto" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href='/services'>Services</Nav.Link>
            {/* <NavDropdown id="basic-nav-dropdown">
              
              <NavDropdown.Item href="/screenings">
                Complimentary Screenings
              </NavDropdown.Item>
              <NavDropdown.Item href="/kinesio-taping-sessions">Kinesio Taping Sessions</NavDropdown.Item>
              <NavDropdown.Item href="/products">
                Purchase Products
              </NavDropdown.Item>
              <NavDropdown.Item href="/modalities">
                Modalities
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href='/products'>Products</Nav.Link>
            <Nav.Link href='/forms'>Patient Forms</Nav.Link>
             
            
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            
          </Nav>
        
      
    </Navbar>
    </>
  );
}

export default Nav1;