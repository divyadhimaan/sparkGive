import React from "react";
import MainNavbar from "../Navbar";
import "./index.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import student from "./../../images/student.jpg";
// /images/student.jpg

function Dashboard() {

  return (
    <div className="dashboard">
      <MainNavbar />
      <Row className="row-main">
        
        <Col className="left">
          <Container className="dashboard-container">
            <h1>
              Charity is an<br></br> act of Soft <br></br>Heart.
            </h1>
            <p>
              We Have Built A Community Of Sharing Knowledge, Helping<br></br>{" "}
              Each Other. We Encourage Asking For Help, And Let Inner <br></br>
              Desire Drive Students To Success.
            </p>
            <Button
              variant="outline-dark"
              // size="lg"
              className="button-donate"
              href="https://rzp.io/l/tDmEC2o"
            >
              Donate
            </Button>
          </Container>
        </Col>
        <Col className="right">
          <div className="right-img">
            <img src={student} alt="Student" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
