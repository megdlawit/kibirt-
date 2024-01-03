import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './Assets/logo1.png';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function Navb() {
  const toggleStyles = {
    backgroundColor: '#1A2E3A',
    color: 'white',
  };
  const titleStyles = {
    backgroundColor: '#ffffff',
    color: '#1A2E3Af',
    fontSize: '20px',
    marginBottom: '10px', 
  };

  const serviceLinkHoverStyles = {
    color: '#ff0000', 
    fontWeight: 'bold', 
    
  };

  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              style={toggleStyles}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  style={titleStyles}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* Apply inline styles to NavLinks */}
                  <Nav.Link
                    href="#service"
                    title="Service"
                    style={{ marginRight: '40px', fontSize: '21px' }} 
                  >
                    Service
                  </Nav.Link>
                  <Nav.Link href="#contact" title="Contact"  style={{  marginRight: '40px', fontSize: '21px' }} > 
                    Contact
                  </Nav.Link>
                  <Nav.Link href="#about" title="About"  style={{ marginRight: '40px',fontSize: '21px' }} >
                    About
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navb;
