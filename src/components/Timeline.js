import React from 'react';
import { Card } from "react-bootstrap";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

function Timeline() {
    return (
      <div class="mt-3 ml-2 mr-2 text-left">
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <span className="text-muted"><AccessTimeIcon />1 min ago | 50 comments</span>
          </Card.Body>
        </Card>
      </div>
    );
}

export default Timeline
