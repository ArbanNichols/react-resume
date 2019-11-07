import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Experience from '../components/common/Experience';
import uuid from '../../js/utils';

const Resume = props => {
  const { experiences } = props;

  return (
    <Container>
      <Row>
        {experiences.map(
          experience => (
            <Experience
              key={uuid()}
              experience={experience}
            />
          ),
        )}
      </Row>
    </Container>
  );
};

export default Resume;
