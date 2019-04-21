import React from 'react';
import { Row, Col } from 'react-bootstrap';
import uuid from '../../../js/utils';

const Experience = ({ ...props }) => {
  const { bullets, location, dates, company, title } = props;

  return (
    <Row>
      <Col>
        <h2>{company}</h2>
        <strong>{title}</strong>
        <br />
        <em>{dates}</em>
        <span>{location}</span>
        <ul>
          {bullets.map(bullet => (
            <li key={uuid()}>{bullet}</li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default Experience;
