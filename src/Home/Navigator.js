import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav,Navbar } from "react-bootstrap";


const Navigator = () => {
    return (
        <div className="navi">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">MAP Technology</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Service">Service</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navigator;