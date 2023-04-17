import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectsList = () => {
  return (
    <div className="my-5">
      <Table hover className="allProjectsTable rounded-3 text-light">
        <thead className="shadow-lg border-0 fs-5 mb-4">
          <tr>
            <th>Project Name</th>
            <th>Total Bids</th>
            <th>Avg Bid</th>
            <th>Posted</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/project/1" className="text-light text-decoration-none">
                Lorem ipsum dolor sit amet consectetur
              </Link>
            </td>
            <td>8</td>
            <td>35</td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>
              <Link to="/project/1" className="text-light text-decoration-none">
                Lorem ipsum dolor sit amet consectetur
              </Link>
            </td>
            <td>8</td>
            <td>35</td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>
              <Link to="/project/1" className="text-light text-decoration-none">
                Lorem ipsum dolor sit amet consectetur
              </Link>
            </td>
            <td>8</td>
            <td>35</td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>
              <Link to="/project/1" className="text-light text-decoration-none">
                Lorem ipsum dolor sit amet consectetur
              </Link>
            </td>
            <td>8</td>
            <td>35</td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>
              <Link to="/project/1" className="text-light text-decoration-none">
                Lorem ipsum dolor sit amet consectetur
              </Link>
            </td>
            <td>8</td>
            <td>35</td>
            <td>2 days ago</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
