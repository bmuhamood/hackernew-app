import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg="light" class="text-center">
        <Navbar.Brand href="#home">
          <span class="text-warning">HACKER</span>
          <span class="text-secondary">NEWS</span>
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;
