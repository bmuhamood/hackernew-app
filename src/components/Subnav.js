import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Button } from "react-bootstrap";

function subnav() {
    return (
      <div class="mt-2 bg-light text-left ml-2">
        <>
          <Button variant="warning">New</Button>{" "}
          <Button variant="secondary" class="bg-info text-gray">Past</Button>{" "}
        </>
      </div>
    );
}

export default subnav
