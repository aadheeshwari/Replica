import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"

function Navcon() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '50px' }}
            navbarScroll
          >
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/022c5f7f-9b05-4e81-9ec3-3857f666ac25/d5sbkw3-359bc3a3-1b18-40d7-b175-2f32ccca5599.png/v1/fill/w_325,h_232,strp/wtf_logo__aarem_by_rijulwallpapers_d5sbkw3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjMyIiwicGF0aCI6IlwvZlwvMDIyYzVmN2YtOWIwNS00ZTgxLTllYzMtMzg1N2Y2NjZhYzI1XC9kNXNia3czLTM1OWJjM2EzLTFiMTgtNDBkNy1iMTc1LTJmMzJjY2NhNTU5OS5wbmciLCJ3aWR0aCI6Ijw9MzI1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.svuRbB5N3Jld-_ZFWwO-CR-Vd75vpRTRq-_8FszAr48" />
          </Nav>
          <Nav>
             <Link className="nav-link" to="/fit"><b>Fitness</b></Link>
            <Link className="nav-link" to="/nutri"><b>Nutrition</b></Link> 
            <Link className="nav-link" to="/gym"><b>Gyms</b></Link>
            <Link className="nav-link" to="/about"><b>About Us</b></Link>
          <Link className="nav-link" to="/log">  <button><b>Login</b></button></Link>
           <Link className="nav-link" to="/sin"> <button><b>Sing UP</b></button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navcon;