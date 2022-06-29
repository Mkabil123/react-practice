import React from "react";
import { Card } from "react-bootstrap";

const Desktop = () => {
  return (
    <div class="container-fluid">
      <h1>Electronics</h1>
      <Card style={{ alignContent: "start", backgroundColor: "lightgrey" }}>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/Home">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="/Electronic">Electronics</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Desktop
            </li>
          </ol>
        </nav>
      </Card>
      <h2>Desktop</h2>
    </div>
  );
};

export default Desktop;
