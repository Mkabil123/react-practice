import React from "react";
import { Card } from "react-bootstrap";

const Electronics = () => {
  return (
    <div class="container-fluid">
      <h1>Electronics</h1>
      <Card style={{ alignContent: "start", backgroundColor: "lightgrey" }}>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/Home">Home</a>
            </li>

            <li class="breadcrumb-item active" aria-current="page">
              Electronics
            </li>
          </ol>
        </nav>
      </Card>
    </div>
  );
};

export default Electronics;
