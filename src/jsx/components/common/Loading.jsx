import React from 'react';
import { Card, CardImg, Container, Row, Col } from 'react-bootstrap';
import logo from '../../../static/android-chrome-512x512.png';

function Loading() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="loading">
            <CardImg variant="top" src={logo} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Loading;
