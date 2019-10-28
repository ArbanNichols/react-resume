import React from 'react';
import uuid from '../../../js/utils';

const Experience = ({ ...props }) => {
  const { tasks, location, dates, company, title, project, highlights } = props;

  return (
    <div className="experience">
      <h4>{company}</h4>
      <strong>{title}</strong>
      <div><ion-icon name="pin"></ion-icon>
        {' '}{location}
        <em className="dates">
          {dates}
        </em>
      </div>
      <hr />
      <ion-icon name="sunny"></ion-icon>
      <h6>Daily Tasks</h6>
      <ul>
        {tasks.map(task => (
          <li key={uuid()}>{task}</li>
        ))}
      </ul>
      <div className="project-highlight">
        <ion-icon name="git-branch"></ion-icon>
        <h6>Project Highlight - </h6>
        <em className="project-name">
          {project}
        </em>
      </div>
    </div>
  );
};

export default Experience;
