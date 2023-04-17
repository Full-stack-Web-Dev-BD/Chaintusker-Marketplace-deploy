import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { ReactComponent as ErrorSvg } from "./error.svg";

const NotFoundPage = () => {
  return (
    <div className="error404-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h1>Oops!</h1>
            <h2>Page not found</h2>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <Button href="/" variant="primary">Go back to homepage</Button>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            {/* <ErrorSvg className="error404-svg" /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFoundPage;