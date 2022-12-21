import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import myLogo from '../assets/logo.jpg'


const Nav1 = () => {
  return (
    <>
       <div className='mine'>
       <img classname="image" src={myLogo} alt=""></img>
       </div>
       <Navbar  >
      <Container className='nav'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/">Home</Nav.Link>
            
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/services">Services</NavDropdown.Item>
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
            </NavDropdown>
            <NavDropdown title="Patient Forms" id="basic-nav-dropdown">
              <NavDropdown.Item href="/back-injury">Back Injury</NavDropdown.Item>
              <NavDropdown.Item href="/neck-injury">
                Neck Injury
              </NavDropdown.Item>
              <NavDropdown.Item href="/upper-extremity">Upper Extremities(hand,wrist,elbow,etc.)</NavDropdown.Item>
              <NavDropdown.Item href="/lower-extremity">
                Lower Extremity(knee,foot,ankle,hip,etc.)
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/team">Our Team</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/location">Location</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Nav1;