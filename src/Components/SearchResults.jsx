import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function SearchResults() {

    return (
  <Container>
  <Row>
    <Col>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="#" />
          <Card.Body>
          <Card.Title>Andy Zhong</Card.Title>
          <Card.Text>
            New York || Software Engineer
          </Card.Text>
          <Button variant="primary">User Profile</Button>
          </Card.Body>
          </Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="#" />
          <Card.Body>
          <Card.Title>Kimberly Kruedelbach</Card.Title>
          <Card.Text>
            New York || Software Engineer
          </Card.Text>
          <Button variant="primary">User Profile</Button>
          </Card.Body>
          </Card>
    </Col>
  </Row>

  <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="#" />
          <Card.Body>
          <Card.Title>Lawrence Hau</Card.Title>
          <Card.Text>
            New York || Software Engineer
          </Card.Text>
          <Button variant="primary">User Profile</Button>
          </Card.Body>
          </Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="#" />
          <Card.Body>
          <Card.Title>Roxie Schnoor</Card.Title>
          <Card.Text>
            California || Software Engineer
          </Card.Text>
          <Button variant="primary">User Profile</Button>
          </Card.Body>
          </Card>
    </Col>
  </Row>

  <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="#" />
          <Card.Body>
          <Card.Title>Zachary Rehbein</Card.Title>
          <Card.Text>
            Arizona || Software Engineer
          </Card.Text>
          <Button variant="primary">User Profile</Button>
          </Card.Body>
          </Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="#" />
          <Card.Body>
          <Card.Title>Random Man</Card.Title>
          <Card.Text>
            Kansas || Software Engineer
          </Card.Text>
          <Button variant="primary">User Profile</Button>
          </Card.Body>
          </Card>
    </Col>
  </Row>

  </Container>

    )

}

export default SearchResults;