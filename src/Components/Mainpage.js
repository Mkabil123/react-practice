import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Mainpage = () => {
  let navigate = useNavigate();
  return (
    <div class="container-fluid">
      <Navbar collapseOnSelect expand="sm">
        <Container style={{ alignContent: "start" }}>
          <Nav classname="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/Home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/Books");
              }}
            >
              Books
            </Nav.Link>
            <NavDropdown
              title="Electronics"
              id="basic-nav-dropdown"
              bg="primary"
            >
              <NavDropdown.Item
                onClick={() => {
                  navigate("/Electronics/Mobilephone");
                }}
              >
                MobilePhone
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate("/Electronics/Desktop");
                }}
              >
                Desktop Pc
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate("/Electronics/Laptop");
                }}
              >
                Laptop
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Mainpage;
