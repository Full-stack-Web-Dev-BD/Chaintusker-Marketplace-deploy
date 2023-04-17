import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import heroImg from "../assets/heroImg.svg";
import { AiOutlineDown } from "react-icons/ai";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";

export const Hero = () => {
    // Scroll down to the next section
    const scrollDown = () => {
        const scrollDown = document.getElementById("scrollDown");
        scrollDown.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <Container className="relative">
      <Row
        className="justify-content-center align-items-center rowHero"
        style={{ minHeight: "90vh" }}
        xs={1}
        md={2}
      >
        <Col>
          <Fade left>
          <h1>Find the perfect freelance services for your business</h1>
          <p className="my-3">
          Our platform has thousands of freelancers skilled in various fields including software development, graphic design amongst many other fields.
          </p>
          <Button as={Link} variant="secondary" to='/login'>Join Us</Button>
          </Fade>
        </Col>
        <Col>
          <img
            src={heroImg}
            alt="hero"
            className="heroImg"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
      </Row>
      {/* A scroll down icon button */}
      <div id="scrollDown" onClick={scrollDown}>
        <AiOutlineDown size={20}/>
      </div>
    </Container>
  );
};
