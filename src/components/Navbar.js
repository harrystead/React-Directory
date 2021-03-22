import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Nav() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#">Employee Directory</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
