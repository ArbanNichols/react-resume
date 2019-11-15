import React from 'react';
import { Consumer } from '../components/common/context'
import { Container, Row } from 'react-bootstrap';
import Experience from '../components/common/Experience';
import uuid from '../../js/utils';

const Resume = props => {

  return (
    <Consumer>
      {value => {
        const { experiences } = value;
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
        )
      }}
    </Consumer>
  );
};

export default Resume;
