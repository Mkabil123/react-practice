import React from "react";
import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <div class="container-fluid">
      <h1>Home</h1>
      <Card style={{ alignContent: "start", backgroundColor: "lightgrey" }}>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Home
            </li>
          </ol>
        </nav>
      </Card>
    </div>
  );
};

export default Home;
