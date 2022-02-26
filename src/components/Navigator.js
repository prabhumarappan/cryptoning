import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import '../css/Navbar.css';

class Navigator extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Cryptoning</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/historical">Historical</Nav.Link>
              <Nav.Link href="/tweets">Tweets</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    )
  }
}

export { Navigator };
