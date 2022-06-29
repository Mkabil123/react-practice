import React from "react";
import { Card } from "react-bootstrap";
const Books = () => {
  return (
    <div class="container-fluid">
      <h1>Book</h1>
      <Card style={{ alignContent: "start", backgroundColor: "lightgrey" }}>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/Home">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Book
          </li>
        </ol>
      </Card>
    </div>
  );
};

export default Books;
