import React from 'react';
import { Row, Col, Container, Jumbotron } from 'react-bootstrap';
import Experience from '../components/common/Experience';
import uuid from '../../js/utils';

const Resume = props => {
  const { experiences } = props;

  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <article>
              {experiences.map(
                ({ company, title, dates, location, bullets }) => (
                  <Experience
                    key={uuid()}
                    company={company}
                    title={title}
                    dates={dates}
                    location={location}
                    bullets={bullets}
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
