import React from "react";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <div className="text-center">
      <>
        <Navbar bg="light">
          <Navbar.Brand href="#home">
            <span className="text-warning">HACKER</span>
            <span className="text-secondary">NEWS</span>
          </Navbar.Brand>
        </Navbar>
      </>
    </div>
  );
}

export default Header;
