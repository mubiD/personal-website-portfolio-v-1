// imported features, libraries etc
import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';

// imported styles
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function MyNavbar  () {
    return (
    <div>
        <Navbar className="NavBarMain" collapseOnSelect expand="md" bg="dark" variant="dark" >
          <Container className="d-flex justify-content-around">
            <Navbar.Brand href="/" className="Link NavLink">
              MubiD
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav d-flex justify-content-around">
              <Nav className="me-auto mx-5">
                <Nav.Item className="mx-5">
                  <Link to="/" className="Link NavLink">Home</Link>
                </Nav.Item>
                <Nav.Item className="  mx-5">
                  <Link to="/about" className="Link NavLink">About</Link>
                </Nav.Item>
                <Nav.Item className="  mx-5">
                  <Link to="/projects" className="Link NavLink">Projects</Link>
                </Nav.Item>
                <Nav.Item className="  mx-5">
                  <Link to="/contact" className="Link NavLink">Contact</Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
    </div>)
}

export default MyNavbar;
    

