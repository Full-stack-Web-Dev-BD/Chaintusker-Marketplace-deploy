import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AppNav } from "../components/AppNav";
import { Footer } from "../components/Footer";
import { NavbarTop } from "../components/NavbarTop";

export const PostProject = () => {
  return (
    <>
      <NavbarTop />
      <AppNav />
      <Container className="my-5 bg-custom rounded-5 py-5 px-4">
        <h2>Post a Project</h2>
        <h4>Fill in the form below to post a project for freelancers</h4>
        <Form className="mt-5">
          <Form.Group className="mb-3" controlId="projectTitleInput">
            <Form.Label>Project Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter project title (max 125 characters)"
              maxLength={125}
              className="fs-5 py-2 bg-transparent text-light rounded-0"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="projectDescriptionInput">
            <Form.Label>Project Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter project description"
              className="fs-5 py-2 bg-transparent text-light rounded-0"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="projectSkillsInput">
            <Form.Label>Skills Required</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter project skills (photoshop, illustrator, after effects)"
              className="fs-5 py-2 bg-transparent text-light rounded-0"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="projectBudgetInput">
            <Form.Label>Minimum Maximum Budget</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Enter minimum budget"
                  className="fs-5 py-2 bg-transparent text-light rounded-0"
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Enter maximum budget"
                  className="fs-5 py-2 bg-transparent text-light rounded-0"
                />
              </Col>
            </Row>
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="projectDeadlineInput">
                <Form.Label>Select Deadline</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter project deadline"
                  className="fs-5 py-2 bg-transparent text-light rounded-0"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="projectCategoryInput">
                <Form.Label>Select Category</Form.Label>
                <Form.Control
                  as="select"
                  placeholder="Enter project category"
                  className="fs-5 py-2 bg-transparent text-light rounded-0"
                >
                  <option>Web Development</option>
                  <option>Mobile Development</option>
                  <option>Graphics Design</option>
                  <option>Content Writing</option>
                  <option>Video Editing</option>
                  <option>Audio Editing</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="projectAttachmentInput">
            <Form.Label>Project Attachment</Form.Label>
            <Form.Control type="file" placeholder="Enter project attachment" 
            className="fs-5 py-2 bg-transparent text-light rounded-0 w-auto"
            />
          </Form.Group>
          <Button type="submit">POST</Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};
