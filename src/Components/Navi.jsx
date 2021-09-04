import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'


function Navi() {

    return (
    <div className="navigation">
     <Navbar bg="primary" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/profile">My Profile</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Navi;