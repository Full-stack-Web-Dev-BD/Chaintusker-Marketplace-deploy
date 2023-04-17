import React from "react";
import { Col } from "react-bootstrap";
import { BidForm } from "./BidForm";
import { ProfileCard } from "./ProfileCard";

export const ProjectDetailBid = () => {
  return (
    <Col md={8}>
      <div className="bg-custom rounded-5 p-md-5 p-4 shadow">
        <ProfileCard />
        <h3 className="my-4">Project Title Goes Here</h3>
        <p className="fw-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          recusandae, fuga ea expedita ducimus facere? Sequi nisi laudantium
          veritatis distinctio provident dolorum totam eius dolore doloremque
          sapiente, repellendus suscipit quidem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Error dolorem quasi nisi, odio ratione
          ex suscipit repudiandae. Deleniti illum unde, eum necessitatibus
          accusantium cupiditate in quis, dicta distinctio, velit culpa.
        </p>
        <h3 className="my-4">Skills Required</h3>
        <div className="d-flex flex-wrap">
          <div className="bg-custom p-2 rounded-3 me-2 mb-2">Skill 1</div>
          <div className="bg-custom p-2 rounded-3 me-2 mb-2">Skill 2</div>
          <div className="bg-custom p-2 rounded-3 me-2 mb-2">Skill 3</div>
        </div>
        <h3 className="my-4">Attachments</h3>
        <div className="d-flex flex-wrap">
          <div className="bg-custom p-2 rounded-3 me-2 mb-2">
            Attachment Goes Here
          </div>
        </div>
        <BidForm/>
      </div>
    </Col>
  );
};
