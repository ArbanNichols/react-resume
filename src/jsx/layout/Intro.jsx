import React from 'react';
import { Row, Col, Jumbotron, Container } from 'react-bootstrap';

import CoverLetter from '../components/common/CoverLetter';
import Headshot from '../components/common/Headshot';

const Intro = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron className="jumbo-cv">
            <Row>
              <Col xs={12} sm={12} md={4} lg={3}>
                <Headshot />
              </Col>
              <Col xs={12} sm={12} md={8} lg={8}>
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
