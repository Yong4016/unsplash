import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>Unsplash Images</Navbar.Brand>
        <Nav className="me-auto">
          <Link
            to="/"
            className="nav-item">
            Home
          </Link>
          <Link
            to="/:id"
            className="nav-item">
            Search
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
