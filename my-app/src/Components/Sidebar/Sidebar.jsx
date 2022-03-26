import React from "react";
import SidebarOption from "./SidebarOption";

//importing bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Sidebar() {
  return (
    <div className="container-fluid">
      <Row>
        <Col lg={4}>
          <SidebarOption />
        </Col>
        <Col lg={4}>2 of 3</Col>
        <Col lg={4}>3 of 3</Col>
      </Row>
    </div>
  );
}

export default Sidebar;
