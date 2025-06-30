import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import profile from '../assets/profile.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
 import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-">
      <Container>
        <Navbar.Brand href="/home">DHANUSH  A</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ alignItems: 'center', flex: 1 }}>
            <img src={profile} alt="Profile" className="nav-photo" />
            <Link to="/" style={{textDecoration:"none",color:"black",marginRight:'10px'}}>Home</Link>
            <Link to="/about" style={{textDecoration:"none",color:"black",marginRight:'10px'}}>About</Link>
            <Link to="/Project" style={{textDecoration:"none",color:"black",marginRight:'10px'}}>Projects</Link>
            <Link to="/Skills" style={{textDecoration:"none",color:"black",marginRight:'10px'}}>Skills</Link>
          </Nav>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <a href="https://github.com/DhanushUA" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
              <FaGithub size={24} color="#000" />
            </a>
            <a href="https://www.linkedin.com/in/dhanush-a-339823253/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} color="#0077B5" /> 
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default BasicExample;
