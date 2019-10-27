import React from 'react';
import { Row, Col, Container, Jumbotron } from 'react-bootstrap';
import Experience from '../components/common/Experience';
import uuid from '../../js/utils';

const Resume = props => {
  const { experiences } = props;

  return (
    <Container>
      <Row>
        <Col lg={{ span: 10, offset: 1 }}>
          <Jumbotron className="jumbo-resume">
            <article>
              {experiences.map(
                ({ company, icon, title, dates, location, tasks, project, highlights }) => (
                  <Experience
                    key={uuid()}
                    company={company}
                    icon={icon}
                    title={title}
                    dates={dates}
                    location={location}
                    tasks={tasks}
                    project={project}
                    highlights={highlights}
                  />
                ),
              )}
            </article>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
