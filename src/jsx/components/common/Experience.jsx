import React from 'react';
import { Row, Col } from 'react-bootstrap';
import uuid from '../../../js/utils';

const Experience = ({ ...props }) => {
  const { bullets, location, dates, company, title } = props;

  return (
    <div className="experience">
      <h2>{company}</h2>
      <div><i className="icon ion-md-pin"></i>{' '}{location}</div>
      <strong>{title}</strong>
      <br />
      <em>{dates}</em>
      <ul>
        {bullets.map(bullet => (
          <li key={uuid()}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
