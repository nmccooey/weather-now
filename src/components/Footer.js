import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <a
              className="github-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/nmccooey"
            >
              Created By: Nicholas McCooey <i class="fab fa-github"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
