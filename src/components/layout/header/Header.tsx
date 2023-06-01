import React from "react";
import { Row, Col } from "antd";

export default function HeaderApp() {
  return (
    <Row>
      <Col flex="100px" className="logo">100px</Col>
      <Col flex="auto">Fill Rest</Col>
      <Col flex="100px" className="profile">100px</Col>
    </Row>
  );
}
