import React from "react";
import "./index.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./../../images/logo.png";
function MainNavbar() {
  return (
    <div>
      <Navbar className="nav-color" collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand className="brand" >
            <a href="/">
              <img src={logo} style={{ width: 40, marginTop: -7 }} alt="logo" className="brand-logo"/>
              <span>The Spark Foundation</span>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav">
              <Nav.Link
                className="navlink"
                href="https://www.thesparksfoundationsingapore.org/"
                target="_blank"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="navlink"
                href="https://www.thesparksfoundationsingapore.org/about/vision-mission-and-values/"
                target="_blank"
              >
                About
              </Nav.Link>
              <Nav.Link
                className="navlink"
                href="https://www.thesparksfoundationsingapore.org/programs/student-scholarship-program/"
                target="_blank"
              >
                Programs
              </Nav.Link>
              <Nav.Link
                className="navlink"
                href="https://www.thesparksfoundationsingapore.org/contact-us/"
                target="_blank"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNavbar;


