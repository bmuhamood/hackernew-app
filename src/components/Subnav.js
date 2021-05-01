import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Button } from "react-bootstrap";

function subnav() {
    return (
      <div class="mt-2 text-left ml-2">
        <>
          <Button variant="warning">New</Button>{" "}
          <Button variant="secondary">
            Past
          </Button>{" "}
        </>
      </div>
    );
}

export default subnav
