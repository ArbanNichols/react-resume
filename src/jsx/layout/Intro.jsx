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
              <Col xs={6} sm={6} md={6} lg={3}>
                <Headshot />
              </Col>
              <Col xs={8} md={8} lg={8}>
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
