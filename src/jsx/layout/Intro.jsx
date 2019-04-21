import React from 'react';
import { Row, Col, Jumbotron, Image, Container } from 'react-bootstrap';

import CoverLetter from '../components/common/CoverLetter';
import Headshot from '../components/common/Headshot';

const Intro = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron className="jumbo">
            <Row>
              <Col md={3}>
                <Headshot />
              </Col>
              <Col md={8}>
                <CoverLetter />
              </Col>
            </Row>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
