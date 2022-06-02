import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../images/logo.png";
function Appbar() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="logo" width="100px" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default Appbar;
