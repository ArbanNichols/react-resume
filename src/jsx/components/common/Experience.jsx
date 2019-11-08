import React, { useState } from 'react';
import uuid from '../../../js/utils';
import Collapse from 'react-bootstrap/Collapse'
import { Col, Jumbotron } from 'react-bootstrap';


const Experience = ({ experience, ...props }) => {
  const {
    tasks,
    location,
    dates,
    company,
    title,
    project,
    highlights,
    description
  } = experience;

  const [open, setOpen] = useState(false);

  return (
    <Col md={{ span: 10, offset: 1 }}>
      <Jumbotron className="jumbo-resume">
        <h4>{company}</h4>
        <strong>{title}</strong>
        <div>
          <ion-icon name="pin" />
          {' '}{location}
          <em className="dates">
            {dates}
          </em>
        </div>
        <hr />
        <ion-icon name="sunny" />
        <h6>Daily Tasks</h6>
        <ul>
          {tasks.map(task => (
            <li key={uuid()}>{task}</li>
          ))}
        </ul>
        <div className="project-highlight">
          <ion-icon name="git-branch" />
          <h6><b>Project Highlight - </b></h6>
          <span className='project-name'>{project}</span>
          <p className="description">
            <em>{description}</em>
            <span
              className="dropdown-arrow"
              aria-controls="project-details"
              onClick={() => setOpen(!open)}
            >▼</span>
          </p>
          <Collapse in={open}>
            <div id="project-details">
              <ul>
                {highlights.map(highlight => (
                  <li key={uuid()}>{highlight}</li>
                ))}
              </ul>
            </div>
          </Collapse>
        </div>
      </Jumbotron>
    </Col>
  );
};

export default Experience;
