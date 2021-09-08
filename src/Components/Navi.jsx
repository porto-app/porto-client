import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'


function Navi() {

    return (
        <div className="navigation">
            <Navbar bg="rgb(0, 0, 110)" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/" className="navbar-link">Home</Nav.Link>
                        <Nav.Link href="/about" className="navbar-link">About</Nav.Link>
                        <Nav.Link href="/searchResults" className="navbar-link">Explore</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navi;
