import React from 'react';
import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function Test() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Dream-Port
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto ">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about-me">About me</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#contract">Contract Me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
  )
}
export default Test;
